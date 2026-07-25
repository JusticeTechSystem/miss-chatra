// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTkrwymR6valR0Kkf0rMlJ+QUcQWo4IBZEBuHGnkjkzMSWRmlQwd+LvmINaTm3VYNvn18LfHJMIELVVtSywJzMNBtTq/tN3axsOP7KC/IILUNlosE29YOB+sKBJxrUi3A/96WJyUv55w+zZatQGb9txcZDYDU7wudxRHRarfjoeTVo1H6ppK4MMUdN0DS9+l111bLxayAclK5F5/nlISZE86fZOzu9ik9Mw1/iB8qrqVqtKkIAWOevncWl0RDq7BQByIlBC5t4/d+3NqqGvSllNWp9sdlCBL+ffReNLvpdkKryzTsK21+H3Yu3OT67vdreufMjKtaUcx/iOYhU39Ed+OIN0R1VrHzFfJK7+o4w28EmJNoEfHg2dyt9notjE5/GgvbpExeaomDii88TA5sPW8BkdFzpXGPETTgGE10I++0i6TOFEcuWuqbBZ/7ivlByrw2VKYuAcM4euhd3URsq7EaGEeVCMeXnN3UPIH/LTM+Fps9ss0P6XJC3u1hEErArOTNx6IfiwbyPdEf2BpBzbr63nO790wEZ6z259Ou3Q1HvWMVDdN7hFctOyY6nkaZNuvMbgvcQ+WoKDzuCA67vL2r/IiWTI0kwLyfaKwzmKc02lNeK1HynJgvWpcWdjcEpafbVwMgdoQ0kA/0V754MvZM1zIz+ryB6dGH+iKhqu3rbDBYASVHChHUXhE0DNshhP3rZu60GhmnwRzcy75yyQqMh3zz0vTcz1cVbYjf0jHKRzDBjNLVYAwdXJpOOwc/730fAqclzoO5p0F0vwY5ZN4Kg7VPq/OEHcXVN8ztkLHrdugP8ThtFfG168xVdJQObqOTwIeOsPNxWkr+JLaRy0x/ZrNejb/vQBoQtLtCUOc9QZz3QhL3NWaw/3JgriO56K+6LHIIO+c2rrugarTo4px6wQQhv87zHGPuqLVSpccerWYW3QvXwUOi9Sr0uXN2Cm7EA4whjv3R8+fHPA935NCNcT7g3NDWMykPY6Yd3qWBRhs3SZHWF3sxi7AYxlpY6Sc6knjYDMsD0MnbPA87k6EUmUcSqtRLUobSvOFoRBX+2gF0Y/BlCiO1GZrLqoPsuEizujZDIk74uu8z5EUfleNnlVEER6pGKlALNazbOf+9c7Ewjm6gjhrHAseGOVxm8Otv8cMasj5bdVC3f9kqReXjjH+oAW3+aMW7Oh6A8nT4rUeVI4VfWUnIh3gsY4QMnY9FTMSKkGXlDWxTjmdh4rEkOitvwe/lZW2FWKbhKg0ssbQBInE+c6GZnJQgw8i4Zs0ehkCf/BffIIlVkKqoCFUsVNH80Jmw9PbbmQQ7oI4Vl8QdhQ3LOvdYQJ9rT2KwjL5QhOJiTubbyRv4oBH/CM9LRGnUtxbrvs7sBLMcw=';const _IH='73b2df54644d51ad953b9e2533c5bc2f1ee09674b513e3b5a6c1e7f0289cdf09';let _src;

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
