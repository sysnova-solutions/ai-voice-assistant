export default function handler(_req: any, res: any) {
  res.status(200).json({
    ok: true,
    service: "sysnovaai-voice-dashboard",
    timestamp: new Date().toISOString()
  });
}
