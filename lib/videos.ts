import fs from "fs";
import path from "path";
import type { Video } from "./types";

const VIDEOS_DIR = path.join(process.cwd(), "data/videos");

export function getAllVideoIds(): string[] {
  return fs
    .readdirSync(VIDEOS_DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(/\.json$/, ""));
}

export function getVideo(id: string): Video | null {
  const filePath = path.join(VIDEOS_DIR, `${id}.json`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as Video;
}

export function getAllVideos(): Video[] {
  return getAllVideoIds()
    .map((id) => getVideo(id))
    .filter((v): v is Video => v !== null)
    .sort((a, b) => (b.publishedAt ?? "").localeCompare(a.publishedAt ?? ""));
}
