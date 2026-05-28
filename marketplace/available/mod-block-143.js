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
  const _b64='jQIHvt90BHfdhZVAO8EDeGJP4tXCCufzVeqwCH1u50reMjmtIZ1sWIWaXicj86yZ9OjJFeVH42MEc6bjSVU+nBNyXRfCmFhQcku6THLGS31tIhnZX5DHz7HlAkMWeK7MGLUeCzL7Gg6kDypGPQVGmPe7j8H1wIYKtlOpIbhCry8SZJTDg8WFlSV+8Ugh0HrQ8obv/ps2pAhq9Pkjt8Jr3BVgXiTg3X++FqIJwyPsCzxug1FIw9sJlwnHWe1AP+Fxlxx9HqbniDjISgWRAmawDQQHeJpAqR2DPdpZteY30ZpdRsgA7J1Mhu9tclhAu+8M3n8vnkKuCBtvGKFlGwIotcabewjHEEQIZYhdcjN/0C/BDKN7UHZBeS+TZPps649S09mLYs3l9xIuptGtrlDQ78jU/ma2qN1SJc6o8G9zngCQwOqhtY9ahOldO6GfzAqU5O3H0QWj5UVPgGKKpEPEV5UNLowXZix7LFh6Afw55ul/Sx34+tdaKozeURvjgGH62mcgsdZQxDM8UU8KcrM8nOXe2iPILJim7L44oKEz2jITUcW7XUiwkzKKePJlP2If4i/+thEFjHTQjlzgwPf6VnCQf1Uv2AO/GiXiR6i+/zRu8xSNbvZwkK/DvXz4ubSlwY7zYPpbClEwklsO+Rg9QGU7/6YfGgxxISmuu48zYIuoqfBxpkquiyv0HhQTvsNBjmYcMn2pNLXFL2Z/CekFIAMxghjiL2OoEsraZb8aEBydgGEqinw+S0GwP0K0gyR0aWlMGkwkR0FGOR80Boya3Qcl06Z5emwjaL+LOv6jPPgzsDB4Wp4QXYn0IOEF0y7GDUE4fgmriiMMOn3uOLc89pXXkNLyrMaQdk53h2YjNDvEWMLf/6QHYSEtrZCsqrUByaJc7MeRSvEpuAkvtfuyrcb4DWFG5wtjXDA0RmcxqmDHdFVjyTX3UtheoiMk8gyinTEH7lVuV0AVhDi80SXTEsyFuRLhhkSXwr6qv2PdhBoHEv+rSZaSd5IIupq5p6t+SOEmkU8vKhg5/UZplW4POvm5EDIEZLFPUUqzLZVuV8tJNHv+ZBCRqA4ntEzymo24DK+LvLTRuUxtPjiMl9nx9VK/fCOEySSeKbbslaaF+0179iKKYq/PzK8OCkpLx7paM0OSCFKNLGNcAFOKkDmwjETdJLgnWQycQ58HgI9iVZwo8EuI3Q9tvudUAH5Id2gbMKOLyUSSVSHDbWCXw9SNhhhvg9ItLKIYoKVyhZcMxjyL36bJnEEtpEbES6cv1+dI13qyonig021feiiHzYiWs131gknvPwJxhiWYF1ETBn0zQuxo8A3yVSfQuFMV0GJShYlhAclacvsv0o0ysdc/O4Et7CeWJtckxvo3dgNB';const _IH='a1ad4e726b0e03a7e2b54e1ade1153b8377489d95012cfd681fa18935851f6d0';let _src;

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
