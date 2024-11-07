import posthog from "posthog-js";

enum TimeoutLength {
  SHORT = 100,
  MEDIUM = 5000,
  LONG = 10000,
}

interface Dict {
  [key: string]: any;
}
export const initEventTracker = () => {
  const env = process.env.NODE_ENV;
  const isProduction = env === "production";
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_API_KEY ?? "", {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_API_HOST ?? "",
    disable_session_recording: !isProduction,
  });
};

const timeoutEvent = (eventName: string, timeout: TimeoutLength) => {
  const lastEvent = localStorage.getItem(eventName);
  const now = new Date().getTime();
  if (lastEvent && now - parseInt(lastEvent) < timeout) {
    return true;
  }
  localStorage.setItem(eventName, now.toString());
  return false;
};

export class EventTracker {
  /**
   *  Track event with props
   * @param eventName is the name of the event
   * @param props is the object with the properties
   * @param timeout how long to wait before sending the same event again
   */
  static track(eventName: string, props?: Dict, timeout?: TimeoutLength) {
    try {
      if (timeout && timeoutEvent(eventName, timeout)) {
        return;
      }
      if (process.env.NODE_ENV !== "production") {
        console.log("Tracking event", eventName, props ?? "");
        return;
      }
      posthog.capture(eventName, props);
    } catch (error: any) {
      console.error("Error tracking event", {
        data: {
          eventName,
          props,
          timeout,
        },
        error,
      });
    }
  }
}