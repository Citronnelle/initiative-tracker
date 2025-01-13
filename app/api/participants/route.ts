import { createRouteHandler } from "@/utils/api/create-route-handler"
import ParticipantService from "@/lib/services/participant-service"

// GET all participants for a specific user
export const GET = createRouteHandler(async (_, userId) => {
  const participants = await ParticipantService.getByUserId(
    "user_id",
    userId,
    userId,
  )
  return participants
}, false) // `requiresId` is false since we're not dealing with a single record

// CREATE a new participant
export const POST = createRouteHandler(async (_, userId, req) => {
  const data = await req!.json()
  const newParticipant = await ParticipantService.create(data, userId)
  return newParticipant
}, false)
