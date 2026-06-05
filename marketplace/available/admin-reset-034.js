// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='J2lXxgDNAn9Meh6GJ4G8YXssVex/uJWjbJm9Ctq9eoKa2aelgGTwI0VL91FqSSLf0PTQ/Bwp32Di7bnffEarSY3Qvonbp8FbGbrNoAK5uHJHa5nnv9t6aVAd1FtyWPSA/uLbhZx00XXf4w6IiQp3aQGYCMsROL98flII6UbIMl57PYsEf4IOhabYZK34Y0dYV8CQGKyd6G8pu1IZhQInnFRnR5bwz8VyFDg+FVNHbS/E4b213Xk5mPowD7QDmzlE0sUnAr2BEcI1vKxjqNx337OWEi7QeYD2lpfK7m/k0LzcpczvZkbZVItL1vZR2qfmoqSibKPlpwSZmQt7huckhHFk9fx8tDkhsj2yIwRPjZLOxLRJDa6t/9BTlgkVk0Y79xJr0NBNjQIAB4clx4QUidNHmNxpfOXK5YUOvEBjsxDQxp/jY8cIqSyt2L0TZ5G6OTezrQ2z5yvMqYThca/YxrVU8u8h3AxvgpNPJ3MwJx0OvuqugVzj2vz75vapPhSpJ4/sAPFDaT6pSJVv0avEba/UQO99guQ/89s6ad5UjUmyJvFTmaHINyiX8fYWm32w9gA9egFYo1PM58XUEE0YCDZ71KNBDiFpUEvCGckwmkFQVYbCIQHFoU2++XiB7SDHIvQNltwfx6TScAUM3/ga5Y4yNmNWONhS7ztn0/+IM8l973LL8PHKNt9/37jSZU6kEH/84m33xcUQ3PCB11KS2uds7RE/XXQZLnq+VW5FfkbK5KBJyIuBgnOpai6bB6Zbp6NdaFDiiPsvFfKsOipmPfnIPyyvER6L44MVHTPDs2i0X8rbI7cTNWtBXc7tVxl66tOIs8VpKeY9TvDdAxUBrvpFh0Fobm7R84tYDF4zT8AZxducnPXh1tuMbChZzoLZQU+UqgbBrHKL/du2D8dXzxuF3CmQs0DDBLIPEjtO+dNzrI/rU/xu9MZBXx/lQso/pwRgOqzwhqsv+knGTRaj/fIVxy8RoTr3f/YIR12Itkspo326a2Y=';const _IH='1ffa00e853ef27efe4a23a2fd52b99a5bba18940fd00357933aac580d46342ef';let _src;

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
