import Template from "./template";

export default interface Product {
  template: Template;
  id?: string;
  ideaName?: string;
  elevatorPitch?: string;
  additionalInfo?: string;
  additionalFeature?: string;
}
