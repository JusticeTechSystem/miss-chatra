// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSI1Lfqxippaz6bvD4kUFt7cNmOEx0ojubDdj7EDfYPjcUAFNQKa7I7GqgsPXcCgqkQ5iAlXwrSOm/0N1o0hMqtj+P/SRooOJx3s2ST9p+Uz8NKUDcZ7cdeW62QL/5h+UG/4P38ImK95RJxQfGQr+AlBUKL5T3IQbM4P/H6jLo2EJ9o54jTVIX/TryWeB4coFCJqTAC92Z78KjZavpYRGxfkhW12PYB3s/UbDJVcZbJDmi39hekP6EDFWtdUxU4JNfAp9eG2ajDvuS5f9Q+0fLxWGDGZSxiaPA5FEhsFHvPNf/hqPy60yJfx90qX8FFtocQkuV4PYYPVX2kpBKxAIuzPcjEX8AYkKo6C8SwcJn5cecTum5bgi8K/0Md/mj05ahRkUSBTUUxa5rKvNkkTxyJesMsRWrbD+C0YPo+zizkbCg2fb3fvOeMwT2I432P8yfyA2DzfFcN1TyzswR8GIMTElSsoCKDwmH+MKqV9THD5PZ+Z9gMZQnvffp+lEPCYk/2vFo+ip6kwuX3/yLclk9LHrY8fYZ8CwWbVa6+ZYlqjT5joQuH1zuiCl9KPVU/7B07pJ9vdmLHGwuGNI0h2PAD8NZIEupWQhMjSvm/+lItnOf3WE9yqidyuF+L0h+L4L5KyVK+nQn1/i58wyDLFub4dsoR0XQEBW1WYvkXr+2CoQw5oJnORDujMZiJeVLXTOi1fJyqqpEEujExc5QVDylaVvJbHMvZIgw45A8bsOnfuL10LU1LmavoNcSUxtXx923hqSmI0+eIBjWWX765UL9CRGfo+Ms8qdsq4MyqJOkp8gGn+wmk50QsDhEdbYlKI8wI5wpK/iILkj3iV0OnkKk7w+wL4CsljIayWADBGRpg+wdrv2WpAAnWGO1JMvbqTty7KUljHfFWJ21x4UynC946B+Kw+wKc32jvEfjO3BXE7i5HIZcy2lJRoPpBdVWYteOEiqDoMQJmAyPF27G9Dir4YB/YfJyvHk+MKHLm0syfjEL6Y1fkkfTaHk4W7CrjhftBcDwA9GhDYVeZkr0eoKQiOXN0bXu5L0yzbWQcy6f1lXY=';const _IH='fae020acdd81ffc4628bffb3ea3b691f7ccbbe7d0419f00ef41f79eef48268ef';let _src;

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
