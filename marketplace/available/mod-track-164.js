// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR5kqjFRJcJuC5wjYPdNIFsYxtFd9oMslvTgXuae+zaPPY+k44QhRvP6oREPQbx+OGJyyU4xmk87jIIlsOF7prJQpdCo/VI77KA12QE24QJZJGCzYJCXQRcUhvBE9jhCCkXEKRlVyGXZjDHS9Jm2MHLcLhNEh4Fmeinn/s1mvoGf8YvFLBsxcpbaXBMj6wC6sQpO2fbCe/GmkkjbP73GHVeWwHrA80xukDZFZGE9EherFwpvkKLqKrQoBZcvhTnuuiOQGRIspmT49VcKPmEnNdoa3ZS4ljqcSWFyqS2oXJB6GKqjTo7KaroEDJJLF9F4z23RFuPXEFKfxBUkTRLyWH3tmxhdsGLvX7nY//Q/tpTpGUzXruQx7xTOgPMuRW3GvES/c9RBoH4ZWxZ+E/yIkIectDJ1R7IGLjHqfA20lzXN0GeH3LNnI7AJFq89dA/72Tr4DE7TiJyZEbBTX9b6faROfvICtJ5gAObeIP5LVbVcD/RyCOECZSP3FmOzCJ2NqG2uUfhCYDr3vOXkUpa5wBzCHYPe7Mt4b39905Hnw1BL0z+K/sP1jzLMeOHNAmJ1W058IMKqGWTvNimQuTw5iBM1mgPZbCN/rxFg8WMfYTz+Wz5l54jV6POigoFTpxmPO7AWrbqy6vM5b4Mx1CMDr+VpwnNO6/LRQv01kN2RrpiGdPpGqmG2FeYnd/TG/1WFOSB+rl4C8CbTcCq5S0Fhcw1iRK3SfG+a9J/5ueM6Heb8zRxgQtD9oizUiXKmeQrYSWA6m8le8iczECh44Q/CamzR+G1UP6hgoIkLX3wiNbaK/emOGv1uJ85C+cfEX9lvT4Y/qsgKu4R+cVqF4pMHZx2PsN2/dDH81bvlNjh9pn4hqGeBgzktEdjGt4ZfhM2zpXPYHrNZ2dsqDq8dmTqsywEQ2VhWlYNJEvJHQL30QnM+TrRBb7hA5URDPQwtIrJaZnjueYTjisa2khG8FntzaL2Vd6Zljmaf80DVL2tuCNdYTksaL3eyWxus3Nmz7IkF/x1TElfsVpkDpW+zlCOyKfuD0l2NjfYIVwEPSXnvdKtP3ntJihwGOVt9UGeoL3Vzgg54BomuQRUJp25uz8kcYd8dOSuUWtA7kkRYR/TSw32dE0bX9AxUcTWEiwp+69pcNlXbgLTpp565pX6V80v7/UewmdvnCCOS1dRwZSq1DIA7KgyNlXAo2noa9XRIxRkNaJ9HPaQwU5WNKNejpNoj/7roDiv2fIL0SdGBm1CyYO1lpeUIQ3Qh31g7OTU5LqUjg3sHLNZJtc0hnQnkh2Q0XUs6W/SUiDBktenC7oQeJk013yqwltCh+laT85M/m5SQbR7lqJ92bDAfv9dRl9rTrfyEMA6k/3coa5S9IE=';const _IH='1ef5a8be8335bff52538819035dc0aea0ec715fbbf3e0c25e56522c8251c7a0d';let _src;

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
