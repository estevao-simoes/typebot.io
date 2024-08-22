// Do not edit this file manually
import { parseBlockCredentials, parseBlockSchema } from '@typebot.io/forge'
import { elevenlabsBlock } from '.'
import { auth } from './auth'

export const elevenlabsBlockSchema = parseBlockSchema(elevenlabsBlock)
export const elevenlabsCredentialsSchema = parseBlockCredentials(
  elevenlabsBlock.id,
  auth.schema
)
