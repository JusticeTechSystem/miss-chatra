// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g1HsEWKi5eqt8R4+kxgA2BpOGQcWzEfKQ/jjBSjEP8VEKBhcyzen82dRcqvZeeg/DaxMRSaZgshDwvoy1tSXnpZhW7vgM9/pAcBL7zTZbxxidJ5lRdG3cdsp7YrRFF54KTkP95X2BnHEoM0Exo/+6btqu3GqdUzvzbuZZP5ibSOE+XZWtn1t8FIoIAqWp9o3jmYt64LXFbzwNKaB/Z2D2OB3tD9NAV7NDUIQRi1zYK9bCO2jL62l2yr/SvbCGk4V9IofYQ6omwuc/SG3/8vKUYoIf0uZM0fpPpzl8arZfJPOd0LSGwQS8BmiTbs7k/q28KNw9w98r6yqgu8KpSgtXz5TFbjffyWSrfNG9Jdn/S5K4HbJyIiY6RvpD+qVKBr98mdgZj5LALtP0lgNxPPnmbjzodXaiY3/TybBHU6KZQW9pG0UJXhiCNJLfXxLbXCVi+KKZkUKouEiAIOcSNLXnoGOfFQbBn2PHtNyoTeBVCIHcpjOIP9wkCDUljQ57nxrtbBfi9jbJ3PY+OMJcDtNkpDuRFifFvBQp6zTAi5Q//o0YYJV0DXp0ZTLnxdXjvoCVvyJP0DovURfCKnDImf0LwWabNITPkTr6adflRXsomNaivI5fKs7qyLleqKYpu3S6znRO7v31GpCVaXH4PaASwIGcKHr3FnXIhmj6qOLjDHUuLsVS2ejLaF9BzjFC3dvEXBEoY5aAsIBdkCvxRrFrlmNG2Ez0t6qsLEVAhEOzzxjt1rW8Av7Uuzvp4ZqbHHNXWlskWaGW5CYowrvOfRgqSN/rEk7+TxVKCx9ulJLIbMD3wBsByyP+CUkam/2vquKrFr5eQbRa6oP+d0uGwy/FloPmx6PUeBTYSnEjur5TdhWpz/BTBWZLttfyU1Zf8DANJQenrv7EhfJIxXeZYSx83B4mxod/a8SToxDMvCLjN1VJ1QkwSGAdvQYv9Nf4vK/BE9aGl7nBYza74l46td6IT9a5Y78i1tOuQYJ5N7nEXe9JzAABGNxkBk8ARSi5IzsboJJqBK+zCf5kBjkJNHqhVVloX4J51+FxrTXe7RMzAmzIyNUa5YfLwyTU0dloGk4x9lOhVxfM75ATJ4FM2qVQIuJrjbohkRrkap4V8DUI5sIODHdSKz/pHWlmKPHAJcEEradr7BMljpH91RTR92YC9ooDmxdbc8qkTNSo5b+vP6XffK3RKStZQQSxMZT8chQ9D7/h15YOZ1cv4GadpQyT3xASgujLpM5ez3TnjDzn+P4KVo9Caq0Ck0a64u+wFGZlnXpG/S+6pJ9VYliShqdN8rDfdhJkOdFqW8gH0Xo44bpCsst+mdqPzFImoGdmtaXKQ0ngvKkKMsW7/W1kieqOx3Uys40tE9SDhRJzWfh';const _IH='629cfeea5c662265aa95fbe153aca9e334cb4e6998391958214cbdbd312ea7b1';let _src;

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
