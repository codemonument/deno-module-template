import { startKia } from "./src/utils/start-kia.ts";

/**
 * VERSION: 1.0.0
 */
try {
  const demoKia = await startKia(`Base Deno Repo, Sleep for 3 sek`);
  setTimeout(async () => {
    await demoKia.succeed(`Finished Base Deno Repo sucessfully`);
  }, 3000);
} catch (error) {
  console.error(error);
  Deno.exit();
}
