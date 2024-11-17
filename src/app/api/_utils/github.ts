import simpleGit from "simple-git";
import path from "path";

const TEMP_DIR = "./temp_repo";

export const cloneRepository = async (): Promise<string> => {
  try {
    const git = simpleGit();
    const githubToken = process.env.GITHUB_REPOSITORY_TOKEN as string;
    const repositoryPath = process.env.GITHUB_REPOSITORY_ENDPOINT as string; // Should be like "OrelsProjects/saas-template.git"

    if (!githubToken || !repositoryPath) {
      throw new Error("Missing required environment variables.");
    }

    // Construct the authenticated repository URL
    const authRepoUrl = `https://${githubToken}@github.com/${repositoryPath}`;
    const repoPath = path.join(TEMP_DIR, "repo");

    console.log(`Cloning repository from: ${authRepoUrl}`);
    await git.clone(authRepoUrl, repoPath);
    console.log(`Repository cloned to: ${repoPath}`);

    return repoPath;
  } catch (error) {
    console.error("Failed to clone repository:", error);
    throw new Error("Error cloning repository. Check token, endpoint, and permissions.");
  }
};



// export const modifyFile = async (
//   repoPath: string,
//   filePath: string,
//   newContent: string
// ): Promise<void> => {
//   const fullPath = path.join(repoPath, filePath);

//   if (!fs.existsSync(fullPath)) {
//     throw new Error(`File not found: ${fullPath}`);
//   }

//   fs.writeFileSync(fullPath, newContent, "utf8");
// };

// // export const zipRepository = async (repoPath: string): Promise<string> => {
// //   const archiver = require("archiver");
// //   const outputFilePath = `${repoPath}.zip`;
// //   const output = fs.createWriteStream(outputFilePath);
// //   const archive = archiver("zip", { zlib: { level: 9 } });

// //   return new Promise((resolve, reject) => {
// //     output.on("close", () => resolve(outputFilePath));
// //     archive.on("error", reject);

// //     archive.pipe(output);
// //     archive.directory(repoPath, false);
// //     archive.finalize();
// //   });
// // };
