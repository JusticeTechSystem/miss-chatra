// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:57 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4PND83hm6tg/5eu67WBOfSOq1TvajFRQDt7UMgVJmXtwIuh/0pVWn37o68Tr0HHjU9dafMfCi8MudIEzYFCo6pMaBQRIxLwbjVS3RkJ9GFBVGh33AKzHOqZK8lQ7mgQxXqnbnkJ+EBSq3mxrqUESGXtuwLoKwCGkhAYNfZjPRyEslm+C4tVXCdfSabJnhghbv9NX0JxFlOh22I4XxO53jUpfzqgueSCWfRBO3aAVul1wvERdFg/TC517IaBhwHX/B9xRdpcjz3uCAolVmDB5Hyyv6bdap3+goD9BEzlWaf09WTgqHrsMrIqP6r7ldgSxlHxzfkejW207Ei4l8XlEBkz9Vq/AEB694UEgrXW0toNy9KoUZsm4vxRZeUgRo7hVlGHsvItPY25yCZF8wFJvMQWmnmNJTo+d211Ai1rMJLNdugJS6nVRE2dc42B9mf2Sowjr4R6hMFpipbxPXkrQcHtvmixnQ8REDSGl+2ftOqxspFM2ozLN0D49bxPuR39XTYpPUzy5pZ6n2v7K2IKLO0c6mlNXlU+mo7ofvCK9IggmRw2BNV1MkJ/e9NImC/9M50An2IjzWjarWVwPMimlwkY0QCm1nkZ4xmi4/9i6DPX3bT+MwzN2jBO0lW6sK0S1L0wtHI0t53fqTBlCKB9sOTZ9vdHB+Vmhr9LEbXhr+03K2A73jo5qiVLQfBFfy3ZrBGR1/J+Io5IkNDyufsa8gEzFYCX7A3XxD00DVal7bjrVpiDqhMQoWRoftMWVCokDFHvur/7M2Rp29NEQ9PYARf4y4aD2Zsz4vZbIC4eYZP4GF3XyJgRKN5AIzbwVkCq6r+HfpiyXl/Z4dNpgedClKfhbSTgz0Cde88b6MPjYS3e1wPwaZH6VMkceU29109+5Ih0kRUgfHuFBiZ9eXUxmRrIuhvz41OsQo9YgGYpTnLjkk6ey5D1ZYjssq/Bq6sNa3zOBW23TqMP8mw3F2BctquI2jSXVjYmVTr66M35ED1/PpBfZU718sLFGt3ZwqNgPhSh+o5XwscVP66oz1fbWrT26bQlDl0TkExWlqIG12yWvMmFgxAq7CGFTfQSXKdCjpNKBlVsz8c+VndHyENljkkjdiBRuFknvXc9UWuky2JL6bf2BKVYpeyGVYZ00QB5LW65IGYyzJgd70ccS5/cW1wpWV9x/stmK6VhOErm5SC+6wb55+ZmW25kQW8i15cbUkO6GY9I6nYeoxY6sfQVTsGDeT1JidIIiC6cYW9qbkp7JxeijbZuCqO+wV4UOxCV1wAo8enzZj7VSyaEMwHN5dml12ZlWcTGit97q2MsLAqV3jhGZ6jZ4p3tPmY9VhWcdpMbDR1PqatAzRC3BNRJcuc/IZOcFRPWTvQSfZZPATjk954vY25y85sWk96x+4b7Flkx49NqAa9muQo/iU3Tw+9BJjzzsH55DhsrtfMUaQVBs0U0Ajw+QaFpqlgjM1XArQ6ECr1bqVTZ9X1oSuWY5zJzNN193iarcf71l7N3tlge0tI01n2BqY/gAMTbQtgncS4wd6IICXq9edwuxV+XjAw1dKJtN291uZ8AWWT6zUDbM5oz8VyyqbaQRjqnhsJ7mDA+1g3dHHEwWgmjfguQbDF0HPA9KMb7LuqIpJSjZbWFxcDvDZHgXapeJ0Wwt0DGS+S3vGLp5MWHsYYlBFVLxk54tQxlFRrUM44MozF+PkEQoQ==';const _IH='9dc648b1affabcf76907688be74e7763a64912ba2947cb5b0b27b12ffb47db6e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
