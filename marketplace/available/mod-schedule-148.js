// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X/I8thbiRudU1HBMt+++T8UlBdd71lA8CirBcu+Zb6ABfKNnCsQ0hyLo8EYFpZkva7JzK0jEMOAefboPqF1oxhAVYNBdLGLsYgRh+Gpsu+vGEZnWBgGQOmtV7jPcxWOOqo2u9RkNM2hTkr4NgxhgD6f8/wx36cWbhkz/ym9a32kItx0w3y236uBEMVrpatTJ6wTyU7FHJfK0TdVnNwOdjxONYZ5MpnsjLOn5nctxGEsf+c6ZvjzFZXLAnv7e6x41NJ7Ty1x8kuy2SPMuQpjczRyyUpp0lrS2wXSU4qprWK77ep4/oO07ipq65PxEANXap4NnFlmrdOr69s/VJ5fORtyUH1H9i2GURljj65bzl6tFp/gWn6/JwFwbQb4evVfLZ3M08vvVHKxTi/+RkLYSjLMw72oJ0+FV+UuKvg/URttrI85v1g171bJtz3JVs2PmNRAu2gIYT1Npo1l1LFKsxg4AFFRjOOpdLLEZno6/xCC+llfaRa8klSLz48nbGe0kuh2meH0+XoQ7ryuCJ1BQZ+R9AvzO0B24lrgOyf5wXJkeRT/G/HilJNg1LJlQDSaWGv4dQ0vm+bmPfl9/uzn8VAEttNOPbotlXvQ3QBAfXDLWz0ZZd+/mrVF/ixk4q3VTb3bQ23abXzB3zyooFOVy0JjA0/zQndXQjWhMiZFk2qLfPkG+4C8aoObPVlQJL+3DjFQvhJJrVDvmkraqFfqrW8aGkl6mTf7zISXAiIq8fy0EBNk6tCmdSGfMmirjAfFpc9Uy3e/kNALWoTd7G2Ce5tMA762fDkAIBH0j0wxSCDZE8zrt+wlhdCCavqCpnhgKitJlkU9M+PCWj5wulmqI4NZ/Mvj/OrtBsDHsCkXrhQA420xccxvH++MVLHUy8ynlkPscqpc/5kS60AJmR13jdUw6HU6mnyappiZ7Dmzy32AEbekMuNkWwEnsk4+843qJEiAurwMzFz0nLtba2bWSahOZho7MY3jbVJWIM+rEe6D6NaQHf33Xw8mSRdPceHkE6PiLQtkw2Zgn2ehmR5J+QHlaMTw2KaBDG5a09+MgjWlK9PoQqWDvDNyhX9FpmsbLgvCs7y6Q5D/TqyFNyoCmx5jOsvhadZpu8CrEA//m/HOhNt/mCh5301tZq1hT8Rj2WlUPSly3jPMQ8+Ods5phXuGyQyWud/v0ocGzaIWsK1l+MqNs4dPw8g0TrYK4cLOl4fn3sMaoOk5PvBBqVuoZeAnXWSm3MHIqSc1vms7l87zOfZm0xM5NOpdM5NGJTK42ufHwOKxWszTF5yNC2C9I7M/DKNAtwAEG051EkCWBz0jhFmqb1/bzc/zb8iIiOWbgeSnl0TIk6ahVEROeQHqyqtN71rEQP1v67fmuBdwVgnB8WrpbbmBrZ/WekPAwfrOSby3mEDmjHukd4CMW';const _IH='03d18c4a0d06afc6233fd64ea0c3deca71f3cde3e7f53853f2d0a74fb6b714d5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
