import { createRouteHandler } from "@/utils/api/create-route-handler"
import CombatLogService from "@/lib/services/combat-log-service"

export const GET = createRouteHandler(async (_, userId, req) => {
  const participantId = req?.url?.split("/").pop() // Extract participantId from URL
  if (!participantId) throw new Error("Missing participant ID")

  const logs = await CombatLogService.getByForeignKey(
    "participant_id",
    participantId,
    userId,
  )
  return logs
}, false) // No direct `id` param
