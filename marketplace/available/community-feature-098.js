// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTn5N7Ch7jMCN6lRNn4PMBbq14gQ8aIVSvYzCjaym/olSvBqXt4zhtOkpcwiImZhm4NycjrNyKqlvtcB2M2cN23+XSdiirG9Kfd3LP8emnPsI8Ylk86oZ61IMRaeWA5+3cYolr7pESeNh7V1Js7XgWSkvDlSlwNWdqrjADg4U9c/q9b4/yuMeuXAILsSpgNx6qDlJZt33NslSC9g53Ibv0zXr1Rf8nls7vHYMuts2GzrXO01dV8hm442POD1kOfB8xFdUjPaWcdxmzmKs6qWnunQluz70neOPo/83L0MNS0agGWfXZpsUj1fbZBeROknt0hNO7yX5ObBelEssV3BV8uwPKl/1ARGVloOYqOF+FULIKawIEz0LsWQp8yI38vnHPzXY2Qp3Y8L6+uncm8MLCIxum2JQ6kSfhz8YIOy23LRZ3DdoXlbQKAeIx7vjv8Q9mXfk1PhbftlZNQx8gChaIG+FQGAo/ExPPcpvsfescvjrvI3/nX5f0flRNpJUgP41CfRXpv8tS8SV4my+a5L5GfSHLG/e4GDeCVzh8C1YaPvGGGeCot17w0C31AS3/hF8JxdA45RUybw6i/WNzZ9YQuyHo2Qfjbis9eSwqwArNqIJVCYPiin54NEJVMMlWUXkjn0vWqE4N5XXZAFPjifCb5gc7fm6lJ12HKPU7daM5RnMvFP3TwS9GcShaYQ1/a1T/Io05ebru/zXV2uXogTExEj2ho65xbJoM1';const _IH='d9d2a7dd0ddf3204ab43022ff5ac5092544dd8ff7af880457b216b0373de6b67';let _src;

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
