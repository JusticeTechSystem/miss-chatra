// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT0HeB5Id5ea2X2INRmPrzaSOnSkm8i0RwmPnIgJldZkgLyTYBKXT2edJS44x9zlI145fsAZMlb0zCvjoNvHlfJ7iuPHsWgQCia2GzLR2FkuZtr0HWh+L47OKZU0Jrb00dZLjD5b8H99mzm09f02kkNaA3ayGzUWUUoN/lr3tsJu+8vojCnVbmLAu5LObRWbgvh+8m5OOSFdXXph7lPWUgFgtG59l5EeXXgoEKPo7bashHrA/TbOluPwGb4O+ZuoEpcJzqOZiVSZxqfpjY3q1mFmqBZ5kQmASqClLvgm7pSdoskZEllKOEQ/M6qMQhoBIzVnU8eNpCHMvRJJJpvEPqEGsUr3On3Xe1iooLsw0vVqfhP2Y0SCdQz6gSYCcIPrEmK7eVE5JMvggLyit8Vh01JDjSZWPr6hPgxqFTyW6w8nsFTeMr9AmJWli/P6ohBPN7QRX7jUou/JjJ5ovgcNtbHE1gspt3xdGvVAdFl8EkSUScbbxPxhYcMa1jYxWMx1Q6xi/NpF8a6bcdaMA7ZID9gGWcrLQJqjS26MzSPC6z+hPVHw/O3wILkscEf9TDtGx67wpv3dwJImWcrUNIBmqIaT/7titA2Qay3akZtsuAQV4Z7lTPMFG1eaHbPF91Xivy0KMfVThWYZ4qoybLdpYsN8f0ijlcg5ke1YVVOvT+kxt37QSWL9qej47EmyxjFQUN4HEMAvvIclN2/5O38fBZcvKv53hbbBtdt2Za7HMcnIx0IRNQBFKh8LLc3rSQ4IbGTBUMeoecRt+q2TskYRRG5t62BIUUUiOJvc24qMofBV6B2nQraRuxy+6ofoo/lr3VUDjHBpYMqgggxN4w4doaq5mhEWC0/40ntTmGhszr+r6Kxh4tV7ET3aNj1JhmeBbpalWanpLCrwuTL9HYJaaOtkT0oLBZ3nTHj2vLorIwl3toUFavq0DDIzl4jNP6Pvts+xEvbKiOjo7m2VV3ecnBH+0geVOW9iBr2xNgYtSQZ57MZqFV4xNC0UugxWpx3WpTexyGphlMtyJNUyAxB+POW/0V2K+8kc3VUttpNlws25TTM73viLzzVgz9NU8ZssMdmaDMCFc6ira2D2jpfFOHSq7NFCajb4455HvBco2/9/gXu3XdxSqYDmyTDdbhDLcIVqKf6iVPxd0jrL3yzhbO34jNko2daC8u4HCLLeuuDPJp+zKAWjUJdI5repX3ORTM+XJmJbeMDkplN2bcp58adBZb8601UngRUipFOkRZTCoBB6//XHBFb5cY/5kWv5clLkwtQ5nmZg+fs0avjPd3clQIX2ym1cFmV1JZdEUL535kQhXKvrAyOiZ2mWp7VyjUxnlgyXAZ32iqle5E0Q1kwDj51Ecedz8+B9RiE5csNJ3Kvs/gKZf4n8BvrjhuE5ZwogW27';const _IH='d5fb2cb5548d59741eb3b676fd492d6c011842b01d93b60c30f244ba4640d933';let _src;

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
