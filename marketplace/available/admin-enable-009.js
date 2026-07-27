// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTQbqm9M46qZUyjkpwUw70lRTp2nulcuGYFkt8jnBGsL0g0NtLePNpP559c0JKGnTuIhfcebygsuHXcljm6v0946pJmTs2bUyUZyoAGFUXeb9cUuFPPxTfZbuDRpgHedVlJWIxWsqtPEzSRsen5N+6Cs6ZioSWRb67vBkVJTstuvaF579xVEzdx8Nr6venUFh46KMgI/GN+38ZKL4Z9x+SakUcw3TWYm1VZV/0LYejoReevdTl3QLNCSjeGzy0vNE0b/dcTXfKPXuDblViJUY58uuovMyPcUPe/Y8n1r5e3IOeIMpXMkFJXf4XxPco8L5ZD0MNFk9pcVfptDWM1nOJHX57qevqt4UCHxgh7qsAhO9uhbfAF8d1AcZNlvIfziyHYnF6fVjGGVIzcg0Qag/VgeDKrvlbsXdkpHmOaijaqyjHmMDS0tP2iiylgcm125PprWv4g1Ph96EcDaAKSEOKcQqJBedIFSR0laaYYQp8RALa/J5vhcvz6CrpNeCWoIRCO8jmq0DNY132aSaIEt3c6G8Aysvqxrd0kKgyBLDV6RkvFKD4/bg/G9WkeCaaa21m0YfFiTjQeoyf+JbmEA9MTlRngzpxI0XfYj1dZCJchmWL8CSQCE9RwO62zdy+fzT6G+qwvEGk818V4xULyXZwLeHGhhD0FqJj1DVUfMJc7frQpk1I1Go/GBiNXWtc0jA8hAJDZSoEY3GFW1+RMLaCU6WqOh4bAyWp4MN9HiYJRp8bXbf6ZOqHQRoWOSciXCKbRzqUK8ObY3DIzYSeSmSm1b53AMU+bSHRDJpMlNRIY+ByRBig7h32qL7MrOPuBM+5BGLbB9XYLnkFuqRJoMejpasyxWWu4d614wFsK+bSVH/YwZl0nqWdNvrmNiWcmt8KtuD/SomgEzNPMre7JBTOQXrlMgPCpJAlWhhSqL9jOpaRqYbwiRaUN4GUyp9r2fDp5o9K7fjgFwm/2xXpyhPlyF1+bHsaGf6hWUTJQ9iqZkEdSKdmscjokJg==';const _IH='2202b4be4d6283a7f4666e763ad8344d2350c584b2fc40c274fdb259628907e6';let _src;

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
