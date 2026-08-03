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
  const _b64='T0JGdjRxapskCkx4vRxvnfmMMnsHJFDrvQj7qDFLBXDs+2NvmamSjjYbwbA86/3G8zf25Uq2CuC6yf9PJblikVbPUJmuNLSaEo8JhsTcZJFnbUWgGQSFz8hq7sWKeuCL+yi5fMZfCzUlluqJPOlNuk9o5L8CmMXD5KoEMY9xR+CWdICYLJpOthLnCxlUqMsoh7cZGGFUtwPidjOSQIMeL0TjCBsXBelX0SZkmIZfo3npfpSKuW8hMvSIkC/ijKH7tOiPYWqFvd5Mij4AyqIuuy5lCih7GzH0QXX7yZGdtHf41PUMy0UjtAwWgG3ZExNQUPh3PRbsEFIfJPSCQl+WhUofG7qXfrh1U5UJp9psJGgUrTt2Gyh8xUKlO20LXS9v6/FTUsFHKFdQ8SbcxStbkC0dRhNSI04QRVvz3xEF9Jghni97QnsGaR/2M8QIHBZ2NuM+TTOqho2SoChxyMk7AW42TAOdIpDk7q/gaRRT4hHVjJfQSL161IwuYSNHxMPoHNkAtFOjY1N5yPvOV29v0sHj7i6YiiG2aAFVEu7XNd+bBQfO+f+A6iQeWtsfKyMmLG1ycHhig910gvJNvJ2c4qBCGle4o88U/I+Av8YR/ANOXDBaHbup01hW2eUHpMnQKgk6MWL01CZG3I3lmLY3d564JqXnvw5v2kygcwam8IlbdZSevKCqxJzfFRBnmhji+7SEWVzFyCzfJfCbjwpW0DZVAGm5uX28VLhgLKc2n+8ZcDBJRGPt68hyFUKOiG1PVuzhslbZlQ0eS+Kz90QGJuObMkeLrgcvpS25PB/UKaw7x+5tjqMaoVW/8PtrGdXVtSbQ7TAyixzLeSXOIRCki84AwJWeZsyXCQayJ4t4CZp7tUNkDHFsdq1ZVSU5ph6ZYd+fodCS3+/1tH9ynVcf5+g+MgRqAEHELH+WbPsnoJzUx4oRh+TNB4LcvSLIlHwkd4zFbbycPnScmlEEtDgVvdQyTkyX8qAbPsYNt5XYlDJKG1BJnmQWNDxojko5TlvHoBJcByag2MqhwSqzI3ejM9iVzMYc3nadanPA5Y5OGq1zspbcC+5cHDilm/GjEWPXf9AkYcSVYIsIt/6HZAiD1r9DZ2C3qJ73pgFnf6xB57O6N/3udGIdBNAj4JRi7Us+zi5NiPt8X55YfYkwZjN5Z83T855rmJu/s1zHBX/8iUe47oeh8d03GosstmpKaoZKneMeISlo1GTaZTmtdYklBP+Ku4F+AhUYOW1BJE3T4BLFJ1ZY947KoC4SggYBn6zojRJ9Igpa84ZWGItwKcfERnmTiniHdEl7eYlEREIl3WJKclaVZVDZMtQjb2xxCHesWL33C3pUwh8aJVZ7fBt1/Z/CprdwGk+Czfzt';const _IH='a4224f70890c73180ca7a005359558ff00986b146edc3b549dc192405973b002';let _src;

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
