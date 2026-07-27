// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTUBJskhbEH57kMPLLDuNNIrSIvLNVXQSxy9j9STZSjunBvaIr8BQ6ahitHxJqUdA6qZB1aC6rCpMjWhZMgkHlEzi3oukGtG65cA1y5oiaHc2/QzZha+sdUj9q4yIIQc76JLBRNFjaaE2RmaieJUuCngR8OCBe3JnUQ5nVw5KzN6B/p991OOAx610zeRvQgBUyzuzbOJ4J4jLPfxfBPtci58bVQJA4kDSzYwcqLWZFFlJcaZV+GyYzNop30aDOWfXiaVJ0ZCm+UwNPHYwDBOUj5HFKm6p7l/olnI9pG3UhfzYkELzPYKBTmr39zicjVhD29UU7gsjjE66UiK/5WbxVxjHXeppc32lKt9hqfv4zPFGthBAe77tHsAmcZq85KmRuTFJ2YQEKLVrJdM3QUpCGE1rE+YJ58SkFB9r/xrPvaQMQEi4YBkz04VAzcPNIEoe0mdIGsHBDjnmmUCvo+pPS618B4XfXBDs1V6hFeiRO5UaShXCqDz9wNWmgPCmqIxv6UqeHsX8JOGxXK2ieDckc+/xy5APVo2FWxDOMnMfjUXCJW3+e/70Ln+s+7ZRTi67w1VG+f+BktKRx6UzB1fytgTEQDIV7xs6Z7cNEJ0sie4fTSS3zEfRL/ITKtZP/0AKl4ubB2j4wysXjKEDwvcnweKpFTxuPexhKikkRdvmPA+txmbHSZ9/5Ntn6G+iieEqHvo5EY9CE5F3p5qqoZcKcRNjqqpGzWTwaqjF7dmvOQb6c99Cktfa72UPaTAm8MA6sjv8Ot5qKKkVFMtqZIGuZ9OuWyEi1KGplQqH2B2QOUlxTQgqiABBG5G6gtRY0Nk1/9+fYA89cuPjXdCNvJWTqCFZaclVpPdx72Wn+qvjA+9U+QQg8HSbzmpdN10krrICo2knPtgzqcaT3dFdAdpMftYs3DBzRMfObuRgvDwf/Q71txnY6i6zGhS6LSDpV8MAs2qng+4y9VeuWvzndWq1woUZvbD4hsJzp5Rn1TzRVzia7hD8eiwC7+GHMNpBwLUo9xTn4cgXCDDWMvwz0mR6ikSJA+AjUCFsoKNHf6LLAuuEbeXD4WJXD7oKSCNJGnZ5foPUilBoB17+1Mq2r4gSiGCX8WFfql66hHArvccoI+NpOwjx+wsY+D0rhA27fSs0wTBjfqRpa+yRhV1ENpGWWR4PTkpZEpVxgXkJ846ivN21ms/RIMHcUIo58yjVnFVcsmr1mReb46GLZ27z0QCz8G/5pKpvIhBXHvB/nZ/BLlf774qSJR63yw5+i6cqBynDkpAAOptDVdcCFqbJiAa4paV0fjTcYlHovAI8O5KJOzEOhqxrTuqPRLKqvGOqp9lTYoDQEKis5B2awk';const _IH='f6550ef692ed41a32600ea261a6e723bea587155be15e98793789a6c341ea29c';let _src;

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
