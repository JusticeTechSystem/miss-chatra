// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/CfIc+vMB6B/KKJ0kxGYAsGwMpMgj+qht7CFU7LpOti/E59bnWnbp4h2JUzz4pg9nKLQIQClMUx07F196hu9t+6vo2n+3I+gRzWZAnCVfAkS8n9igTQ233xovJjN/GSGhlj9FSGSrTRZM6dLv0CQ7GAXdxqN11HihPKnUj6g4eGYt1hvASa7IGL2Q+GLpg+Vqk42Hao7Ca7nP1A+8bPmSJvoHkvoTcger5YiNmDqmePJhQo48QnYMDuXiaj0kVBsup6Qw96Zr4JgxoxOh0/uO9jJsXrGtDRZy7P21N1LMSVDhVQXcYTf8wBQxZUqAOXop89GP9frRTowf2cyFN37DKCM+jPCrCPgLrh7CBvuZk0U/G8Y15Ay8s2lz0VuZsqIG6trhAHtYTO4UiqGqBNsu7fwSa++/K2rJSsR/VAmLTi+78naDlMM+zOzeX5MKvQxROUXy+4Z9uT34oI668D2i4xVje/Nz2dqveB2dtg917z/Xe0tk4VNzuTpE1ddmHLqsjyrTrcObfjW3+FHsjGIy99bXVx8khVZz3xzceHRqPIN7RUC2jgrBK76BDuIh/kDfR3oQ7gCWGd1P/sUc1qELdjt6gO2k8n4MYIkshmWv4Z8VGdZPqfEag5OAEh992M7CT9GjStysSXB1cvIZhgd';const _IH='7d492015544c0bc57b5972e35914a4d8c03f11a2331b806f04feb935bcf386f9';let _src;

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
