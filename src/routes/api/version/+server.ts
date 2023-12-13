import { version } from '../../../../package.json';
import { json } from '@sveltejs/kit';
 
export async function GET() {
    return json(version);
}
 