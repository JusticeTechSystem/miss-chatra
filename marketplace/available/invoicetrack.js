// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MFFUDoCK2LFsb92XnR9nlzOarp+Ik+uWHUhnE62mUREG/7/0j8OIwzE9LBzSj0ABLNc2Ss/4YHhvkCZHbhQ4I8FhujsZv1gGgajd459Pfp8LEjsvuJblOV39jT+0+0bQHLJes6vz94zx52KSXJCQCKTnkQmjwD4TMgTmLjJUU9gKaUNlE08zDbWO/MVXTftwUG0fjx4nbTv5Ge5hwzG+vujS/KxuvdYwCGA0NHzxWlMLlgZC6A9+qI4i3I6FLOWqohoKC+ObWNu/bo8VC6IVphN/bLeOyA04ttR+oZBIJJLUqfX3Nkyx/zdbNs2qAYkiNc0gtwcn6T7zLGW/pOjt4A9UH345FzPd0jmspY3/px11QuM7C4PIAZL0j4qbNnjrZuoXtGDz3eRHnfz2ekkOC//12TD1IGXfywQ4fYND2KEOQmM2Y7uz/hJNbYTESRCxWPVbuKDGc7KKgVunL+uvVGF1fLmuNlJzqb3ym1B5aWSa4rsvLW1kot3kN94BspxPGlqKBeypaqZ6+vWPUjX4YoKLOkrfZaIfuWT+r/zTw7GSo2yS1AFOYfLObBVd3+cXyk2tFD5nSoAixLgZdNAT5lCO2aOQlem0fb5YdL61WeGGgnhNEzvBJf+V9Bb8z+Zr8yay8UutPv8CXtBGI32wIg+ccDVR8SutLHtGKDQWtK2+t+CxS2O7Sxnp+BYuu0PbBmWOB0Df6bcBQyFVhyq/+z0r9pU75cFrGZ4C2phv6s79lku+2Xe8teS/iAmOS6DmiRKVZT/kgyX0uNzQtu8Kr5t3EGau6xFI89ONQfPeFC2AKdlQ4c2MoG9k2mOGMSfE6ouHCtritcpqSBvMbWB+f/6ZivI1Hfuw/CdomdlMbkM2QSc163ftYCkLgBTDp2WUEwcJDtj407swjFgc24q0+9UgVSquSMtM2AvjSenREixJ5PJhIoxJ9Gy3rCYWk/26wN5CzVBlivuM3ghmfhKRjq3wl0qKvjdbpizHrhATvewFPZh31WwNSEvL+C/hyhZyGDdb4dhLf93F0M7t10PEGpD/Eh8ZyKGwkDkxs4k0wG3Ss9cjxL9AN1VETE2v3LjE7PvkifBBgFRPaMK6YBHng640HsDVsmY43JWEGf3TA2+dUGCYE46zFrBrOEcRZ6NdPq7sP2yZTJEqRVMPqhQoBcLwf9RSC0C7kIMhXupDwgTMWeJqMi5LjV98Qt7GozqdR4SZLhD17CtZ1s5Jsg==';const _IH='7b48e3468386f25ac1bcf3f74ad979ec6fd735fa05596f84ff862e7bbb09d061';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
