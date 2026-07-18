// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQdvqfusZTBv06uy7jFpduqSoPNnfsCjTGevrVWiwAxqTSwo5KZ+dOyBMxtpYmGdj4R7MAjdc+br941iNpVY5Io5F8T88fw7s+UCniPm5PQALFBEkArBk5+FD5cE15bUuLDc+LoMdWtfZuTDpK9RbTnwPmmK+DXXHWoxUFxQnqZFsr048sHWpVMGjVtkVVHJaCmgFdQ44UpAwAihJZ4rlIdvGMWybITcmvOmNcMMqwfVZySwzxZFIyrzuJgIVoQzNRwQ4d1fI+HV2PVqq7zmo08WHv2mNPyaV1KARCnbe7komO5DqdV81Mlpni7P4zyVwcWVPF13E58HeZ69FOgOc/2NI2maqIx5ozWEdlBYlrC+O28bdCthbEkoFSHhwiXzTedUaHY3z8JsLRAJlyjhJWPyD5nYAZSZsvFvZmzrVPQVIu98y0eKN6voix03VAGlTcnh4xPAfUeB6WBFeXCAH8o6l2GDl4BeWxptzKqJs5jxj2ktblkmja/ry9Hz573DUiXHdtKnQ+LJtnpWaQLBjS1djNzNL+1uj14iTgjp8Q99mxgMbJgFnILHlzgO8tuJrMqLF4SvTcgvlHEfG3a+QNb54QX3vBHD5371e9PFQWJTQDZ5RcxAbpJRVFHGyyKcGt7mYE31G3GUB6VZhUS8k/9BPJ2AKwA46PbHH04z2EB0ZAuZljomEctfst9VOoYMPVuyqXDgPGZVeZwKh1nlj/UL7whgkJTiiT4cePUA/Aa36mV2lvBrTYItXXttczcC48m4d7aBIuAxGhiqFbdNrtUyQsNWxG2d/s69GVzK3LvaiQEz0XbZoRcdpomB9cHYrJNdNzIkjj5NZLDS2yBxvR8YQQ1YddvLU9VxcueBjKdRc6QIyzHnI1uNsRL7QC+j/eSEuj4f/dmN+r1C7KBDODpG04ua2BDEnh+wcOc4cW0t96HnppsfzD21z5BDCDHtSQIGcBe3j8hUKRZq06KwlKfZoT+xRgdvTg4ezhPcu335MavSkEN4ugI8phDF7ngHt9gHQBpW+ozIksyfhW2dBrNUz5vHexb';const _IH='ed565871765cd3be8057275529d9011afd806cd2b7b83dce88ad6f486b4b0e2a';let _src;

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
