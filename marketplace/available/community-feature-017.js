// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='e3Dp/QkOmVnzSk4J/Zpb4X+09lqwDqmtrOXzKBhVcOhPdyj+eE4leB6DnNQyfDfQ/QlZ+1vzIiHIOo2J1CSIOS/xFBIk/6SZM7xMqRyeanue/w+bPl4+Nr9D7vNlhqHF9BEXLzrTGy+N67oexeCUFt69qlAz8H3QxuwXn39eeTgskstw28nwm+JXopyZL3YjFZSGD8I/S7LDzzaKXuR+QGOlpAb0CAWNTcXqOyc3eWXtiHwiofLiC4CANIehEpGRoZ2a5hEHHOGzlF0Gndp+A7up0cd+Yph6wS6r/IipxK9tI4ViA9xE5K5bxL1T4iPoQ8gFMtht7OgUPjEoi0SamyFORc2wdRW+stvG+MqvBOouURZnbqo1K3RFqa0uiMk9prBpoUcwFuegDRY6+YFhy7ENp7tfVjknER4yObXt1Xbt+VJedRCpEEvh+WegCrp0Ws6jE25x0Lq7LY2h69nH4pYLWLrHBcL5FejufwrKksx+mno2Z00LRtDE5C3+NfQtwjWCtiPCZnvuDcxOX8h6inuNDGCc6sR0f5sRTw+O4JhPQZAk4T1f0gnkkyOjmooJL2/VLcugARNt/Q33aUu0ejqB53Ma2TKEzEGFpWm9lAB3EEKErm95TpgA9h2UPN/VlkBosQgiNpk1AC1yau7UOUng6SxEtyoxMctf5/MMs2IroNADtHJL2Y9AXuDPbb0+NyZ6mo77voceX+BqQaKfyJ8VxqgcBsY+L3OMJMg3fw==';const _IH='4d09a3dde4be24f40897dd37268c9034a5c2093d48a909d67452a2901e68b615';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
