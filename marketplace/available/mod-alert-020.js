// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRGQClRr8gRkOUq1WCFRQ03GG/ih3UH2Zhxz6r6qd10K7EzhIjcj08J2NcNGf/fMyNudScUPPM3zKtNn11r/DI9JqVLtdqgP9rbKSFuQb053fSDkZ8gAwweW5Yv5WYi8nf4bn5qw+IJ92td83omMsJ3RY6DIDK9CCqrjnlbEs/MggluvZcE1WtIL7yNhJRKv+CRHrJzAuKa3cWISC81mWbBrF20cz4ogIcLuAbuOeEsd3VvZXMXUZKoACkcowatDlEfggy/0lSBW/Qm2HGaooMhWEBiNdPyLnHR/V5s9iVyFDr/CfKPZKfCKC5V66oZjObWd+7PjHZBvwm8fHhKBOv4V/LqQeJyEh16hUkzBsIuv1ZvQaSXadyBeaW0JXZR1oVk2ns22i4WVsjBr8MK118XfruIyMrb5b8BmYVez1mKcpR3nKBTBrBsx9GBMraOVA7nM8vabf3wUfVfaCl5XOGaXqVSLNdxSSdsuSnCrlwthg7nR+faL+q6BDEDjkNk1gjNLIxZ044c2Qct+AYkbAaFhOBGPEH+FXvXwLpalQmMIAulg8h5zVNgxabfUJVZJDwtmyQiTHCB7+YozVehh1audzghBIMlaUFdfh69mAfcSl2hDysDePIs1+H02N5cbDjrmj2J3/1JWrSHAtAsverJ7TH5E7cLeKgztp4HUUD1hNokxqLuYNMi3ci3ow6Lb+lH5uy1Avc//Ddy0n1HywqqBcd7qivJv2BAy/07Qsj598aEQF+dlruhBVXL3osZD+lz384lzwQcS4wO4NzSgFfexB6oKpF7ELX8C86C09fpjoDpG9+sIOeX1WSzpAZcxcwaxbKAu/52Rl0jz+EByyaMmTWbLcEZrgsWyE+qg+EW4YY2V9Hw4xCCSd07F4H/RZ7gRu3Igbx8QtnLzDWGz3Nwxg1bDfItnmW4dvdQwKB3GVKDuocEUkJohG9Hu6q0McdRSmD95CI2yAZS/nLwRCCvMCR+wvVaNmBK/IX5uD1XWKr5oSnwqjSaCzwYxdFJFthBqxgvLyp1pcdQaf2iBRAuOkETswirbrrwiy60IGGHFE9/Wrwjt3tGDeexrywDyHgDE9j0Esh2fgMtzgO9eJjTOXTzPQW8WKAhGtM+CnerIGdQw8X+zw9f3PMxZ9mVGp5n2ZY0xQs0t3sY+1KRtBW+CNnVl/n16kwNXq8+OjKUz958l/aq475Y6X2A2JuzA0iGmStoWyzuP7mpwSCgdC+w+sfV2hP2QHyJ13nMp7xij9ZqIH9N4G85DW9DvedtaCqNS8w3dXx1NPp5Rt9sauIQ8mDKhN99ObhM+AxUDAuFpNsk0v05ZEA02P50fakEuMX6uEwtAHPQutF07fxhzwIJrrpkV2Rt9Oh8';const _IH='36e17e1ef98e1402528446982401220ff6bcb4f91193b9f44c3b427602afdb52';let _src;

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
