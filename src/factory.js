import { DEFAULT_INSTANCE_ID } from './constants';
import Beam from './Beam';

const instances = new Map();

export default function (instanceId = DEFAULT_INSTANCE_ID) {
  let instance = instances.get(instanceId);

  if (instance) return instance;

  instance = new Beam();

  instances.set(instanceId, instance);

  return instance;
}
