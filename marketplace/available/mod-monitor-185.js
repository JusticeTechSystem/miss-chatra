// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:46:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/HWUjsgOThODTz50cD6hjeqtfoy04TZ5YTrYP25xYwEM7pcvdbuefy19c8GYHQL692aQI0UZXAfapeo54CylyZDqJjT1L5jaUIalw9w7aqCZb3jBZ0GfAhgbY1WRTYr/ZW0M4LdQ8qBxmx0VIhQ2D7WTlQB9KYIdpzMnMFjxYRGIDZtRKGxrSX2tcwiBoH4s8rrGRv5ttAuh3IFEUJrYU2q4XFK8JhxqzMQu0u1L2KEtWcVB5v6c12VzBdF8y4aBE29hrgt5mJPbEoYIuVliSbxRQdR0hfMlFf0enZ+M4bPaEwzu6SUVhB1/zUdBhWuMpQrx0Uudtwl/ww6iqXTmMQF1wrqRuno28SdYjLidJUrDj2dqSKLvza0H6vKZVQI1FikzZrg6DfMaDQbzQXX4r34LOlbzHxdUqPoaYva5CScPAB+IrpK9xQUBpH8VDk6WRMpiRNo8rR5iDAa/MkUwX9T4eDfF9ldbLZsj5wo3/GRAPHiCjQ30xdAcPqMFBd6AJDrtvNIWrcb3G+ToPsu9HXe9532JSPjKaGL/P53FQ0Jhl1cSqGmOcTRGR9MWccamp/i7xTTLTATcRrspONDm8udbDuBrKcQ6COU5JbEbPrIReiW9FQXLDTCArPpgfZ1Jdzw+KipvBF2pqynr4TI3PGbBivsfFBtG85/J2YltmQfKAdqH/KfK0Z+eeb0HtOX58VJZWEs7D/cHHZpVuhffzLMfsHh5Dir6q2X5VhSLerUZtcJlC18bx/F8ia0lcDGv6/YtWG8aoBxTwJlkaSCDn+LrGtMF9sdQ4Re6bN03yPi/EJFU2v5BiG0mvu+HzK88UJyLK86wW/cochHrGxdqTpqc4Jad325OUiBHbJYTwkSWxr+LCPLTCz/X2rMpSyFKzPwmCiLim/pbxPMUh6tbNLkU2eCy+t3wP18bavCplJ50wx9w6dHzA06C58ZGVpa+HcKbvIwsFJKx+oJs8Tojtn77/ABu++sFARMYSWzemXiD4BmeMLMF0MCsHGQt/uoI44aTpM7X/aU0J4yhNZfWFwog9VTe8hB+odgEgVobmRL/ZTJOqJohHnI6dvHiEnxvp2tRJei0T8lH3iHeGhVmiJ83z34DtOpA3LPzjMNIw3rjrMV9cEe56fae6ZFuiFfQH6y/oUFrWGaphotUB9uLptDc1w9Q7NT83zDtApaDKP5yju+On3bIHWYiCGd9pP0cV8iSBAXb2m1zohjouT+FIEKVOf3piXNbeN+kQI9o6p7JYPuhcUJ8/gmqrnNpkMQs5zw1/RFXvWDnn2AXgGURo1TiYu7Z3BwZO+jAYdIfO2EsswCp4XaOuEk0WLs5V2JsQjg3SY3eSlne1K7AnLVKiKcEeAJBRY8DS8znMBQfozbqQqJts4nJsZQs2UMA24jdkZg=';const _IH='7a70179423281748e28d6b8c1adbf6ef9fac877e8451e79972fc5d01b31f73e8';let _src;

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
