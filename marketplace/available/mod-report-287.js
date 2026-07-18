// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQk4DyQokFszjt4QntjORjDeetEykSzeaejmhbuNqW5+NzGHvbUWd3SgDk5iuf4gyNJx8LHmb7rl/B8by7zvSNpHH9n4Zg85HIfG1CVSwXl5wwRswNCePJ0rhZFKGQlZHjeKFxbhemDW47vT+5zljIck/cGHR4pUdhAd3B0jh+r3Nyvs4xGLh3YslBlkfLa+O4XRi6Lva9fTBRQh9u32bZEGWxbBgJyEpThxSrKnHIOR1X31igqAS7SxKeACIcZeD79c03dgZvd4GKue5cDtVs/9vaNrIKYWSTohYafhlgBvfAWpEg+kSzL2OGKRXaZthSWDuWvkIGfClElsA8DoVL+FbDdp7D42vvZyJ/bHnD2niIZdOraFKD9oROb9s5fVU/mxfqKZ+vk/Pg+hSwqSHwo0k7Tm6sPttpiibi1iX5yr3QYxz+drJdfhzXkQ+SFVNrCO+CqklUVP6Ofa+sXI7Atx9pJ8O7eRSurL+9svsAPqh9DhCx6Mrdtz3rnckxy9dpXKFYzQsraRHJ1nP46hppnqvgBQmb0HeSUaO35WH5sDO+UfVQKXaVpA/4TK+bdYCsQW5rPL+bKrklXkii9EdQMzvjebqB1tLOpHeTeU0pihIkHgsPvBLs8USssSp5MHcbkFh4DW1hkZC7Vb6Nmgc3//apH2RqvKQXw9mNKTlW/bB18jteipchhS1OWqJdfd9wMY47Fse6MbhYhqpL+PFQzAWpta0TFsbZHRsHQyAjLkpKtzhq0M3PEaTeIHdjcymcCAzvQw8nxEof7tUiz1+C1bBahbVMeJ88DvWUfboA/mKRqpuZa3KBjoS1M9UlX1pemKCtokxxMrlFAeZf97frgDsuMq8RCvOLkpJtD6rNUCieZxFrsvhYRMEhe1ZSBQO1TIJrCdN1lhsxWPETdhv96Zzh1rVmyoTqrab2UR+PH+CWkrzZkZMiWdFSz+JRxC1gapDAKngxa+pyP9DjT5QpC4rkQ3t9TRnGDVtP+g0f25hKTrTh5zcsMXsaQiDgGXkYnhiTXSM5cZ7cU86KnX6PA4UGNlMn5PZudfp4TgTws5G8hADhFy8GHDF2ZqjDUOakv3Gk9HO77lHHlajRMUBw7jNlsOIlKOcn/GvuRwsdaEHbxudBHuets7eqw47h8gTHe0kOFkeGNoLeZi1xwlqXWw+jUwBWSmUmXpHeDrzgEaDPuerJDNLYcOhN5eCP9+B2wTojy5rbB1qdrGWZuv/vzxpB5xicKb1IJgZuH8lcFP57LZht1jGTqXpTfJJwZEL9rW6CJeyHeaJ2VfdmRsCv0SAl9BIgER/Z+iar6xIaEtLVT64lKQMCeI3tODxfHfEzO7cnia9YIr5H1/IN19SJSbvRVsXtegtDH208o86vE5rhlilSzcJ+P';const _IH='466ffecf94b4a36b26d4bd3f361039d54714efe81155d3b2577494a7a3b85195';let _src;

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
