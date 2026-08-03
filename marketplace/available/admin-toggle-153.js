// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT1fQu9oO/ZYqseDl/MKlyyCSwxHN81/gHNyZ3BZjiMUDlMuYaCvY6wGqG5fOwuZf5wO8FmyJeXRub4XNFNyTATnMdLb0AoQxhdMCkL7cCqQHQqCQ1UUULBhGla7fte4bf75xb2O9z9MxCq3VTKXt4MpWn8475DTaNswGA7X3jIfmFS3qqwvkITW/sUrl7gLelK6gceiGBzp5fEgCReCttniRktvDrdAQHR0y4t/nrFkqfinoZp409K8PdfviRRFz7594g4ewnVHyULbEl3w8ky7NC7KyPIeL0nVIIE8hC4sFt6MQtsQSHV0hi73G8O+DBxofdod0rW5AIPBRzbUFDgus3sXl9aCkjjTA10mP5j9V9Lpss/eHKavrw44siz32Md7qocRqO74HV8ZVHskjeaGzEvtopNz51oRg/MG/GQR4JypP0WZQM6PMWI0DSbe/lJ88n+cE5nZTw4nVIxGK0+OO4YVr/P1nj3sOLs5n+o5f0pc8ppMQkjBMw3oqzJKlc2w9TKpj+Ft91sVqc6mjvn6Wu6OUD9twasB280yBSbQGixhWw9H8K3c0v31qB2/IGwqXK8LobeVHWee5p3Q9n/Jqx1DP3cSwA9owUy8G9NWKar5wS38dUyk/je1TDGq0TAKz8gZNF/MybX4qUWIofB2elTRZ44+GlO9uNdsJcXVfefaScDa7TFDNJkwK9FBSQY7mmeQqermkl6KGOHWL3ay5Z+Nj+3sTAN2Muhdpg7Qsa3WfXn2NIBAYohSey8+Qyxsc1txB7cVFDDhjPGaXkY2ep68G2aTcNBDZGG1v+gHuv74NmUN0jZ9Rtu1UjSbppBQz6Zjy2Ah9i014kRM+XYmsFinUM0/2D0Io1q5gc7fmybxphKN++4kNO96PTUVO/mQHpZ1ABI/N6VxsycDgSVPfOPM0AfZArkKkNryWYPqbQ+rmDfmwV87MGQKZLlbE31yIzcyVc/V0Z5seCm5g7nO72bAZO1aT77KzJ+CO7ZM/AmPmL4IyLEUD2yqE7LmQ==';const _IH='093777b847833a5f2ec6dc1b027f2bdbae501c877ddc04c31ac42e87fd1755ed';let _src;

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
