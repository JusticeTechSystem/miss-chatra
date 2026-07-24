// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS5jVMjYp+qYdQhUrW4HpXytBBjwxx05TtWaSCtV23KH3Q64a3dsMZfxlSWbkf5NgNe/suBwH9qYz9or7d4WjOi/oq6QslOaM3EU8B6Uk8ShaQODWpVPzSWc9Xzmp/ozrLTEs/2+wJOB8V/utO30MEWx3tCG+Wk5KLooOwMfQoqBOZ2C4aBZPZXnuB/YdpVhyU6gHAY9duYR1WfGW80yDJyBqGY+Rf1lc7WOa73E+V+l80g38Dw2YbtOYqfIunI0ydmI+NtnHMF766l6YkGQvHeteXykO3kvM9I6WvyFcPjRMyYFwQGXr4OnMVeSMzdmL/wadjPOMgWZUL8kMhlUdAv0tS+0SHhD/1YV1w8Ru6bDqndNFJT9zS/FNfPtQ8ro10SbXaqmRncKr/D3Id9jip1zGyCUHIuN459KCgM23LV+dvTX3/HywZzUdwendnGYRbh6qGigeC2AfRBgQINUs6LZkwPcCQ4HFibgWNYMlw3XJqjPqODX042FXpXF5nxk5pw3kgdrgGR3dqaSgQzsuRMXSW8hdYY87LZcjchYKnUCEO2AGDG6JMoJQe8ixrgXFJ9U6zlJNutGu4hYLVTEdtrYuljKZzM/Qa+SG8UmPXzyozKG3T0RoQFQYmqfOY2/R0kOdQoEbmHXrIkktIh9kT8P4uTwiz3aEiG6la0KxRNw6gfmSyAhYIfvHc7OKptADmhbVFbCdq0kbwpw558ygH74lNXJTD8HMosBOh05IDl';const _IH='d5db6e1ece9b717cd750a397292c3536d6eda8cde78d88b0f08b2308e9f3a4c1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
