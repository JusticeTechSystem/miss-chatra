// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6NiXh1f1gU0czyngbOdXaN118j1vatxv2IhFXq9zErSEkNh9DLz7i1+VJy4K4lyPmh1+Z2nsrb/FK5iuta7CUFwEJLsEJh3Ry73ON20BIftUl30On9RrCr1AafEpqJMqJKnfZBBWk3Hhu/1YB5QFesP0jgb7mhyR2Ti7tgc8Ew/RFu9mmPIZpjSFzvSJuv+I4ksXj+x/054q+ssUFLX5dlNaeRiu5CeLjyKG+i9jRoCywdBEczplDixx4gg+oxN5MY1DQML1ryj4lLBqBoSTWrc2hkeQ3uTykdiaNGVDDQm3Oz2dh+M1L39zzR498SuYW3iutPPhegGPqZ1grtdKdv3iZy0kJV65Iv3ejuuWJKVG0juEChMZ7ombim4TIlvi7Ado4zYAUhAvV3nbacuojWy/uJpdp99Nl2p84s2EFxZuf+Y8q3tMcwsafl7o592hNMSLYJTtPwqRvmjxP4wsRBiJLxIodk1yIJ6COFY3aOoVBL5WoPT3EfeqbGzxvmUf7cJqUUBHEHtgIanGFf0iNb/2xzLCwVgoxWM7WmGUjKQUW53K3kPGr60HAqmMV7trF1NMl/m1ebLVmRSPHsDrb2uxj8Dmwbc9Pogfr6mC0l3SWbjIZaZwqlrxasEqXKkgm74QRDLK5PsSyiAAAxtL7T5dEoV4WHnaYbksvnWQwixgs2FscrU3bNhLQjMVIpeNvjTSA1PYoRFZL9c2p9aKRYNMLuWJ87EnyBw6lsC1gInkE5m70D6LkZO8W7zqVON7BpggPySIcA7nZHbFyrbspsRF62P0lKyjH6dKgPRjC6O1jwUH6p+3rA91MS/9LTjFFNtNcqI8MV2VHbMuaNtUHSoRF/eux7k6szvhT/kt0jXa+yF4Bnd9OqDwTZrBHxVGp+sBYBvrZdDLnmFnE55DOidX+lR2gMGQ/tzC5blkapLqVQ5h0ZR6f7plR7TASSe3ryfFzcJxqnYjHHGGS+81ScVxlcdLGagxizmIJwAZkcnFd0iZ9P3hRg338nvq1R5oAzl2ByHgMgltxlhWPlIAAf+HvoXR/lqdB6414OlHjV7dqZT+w3CV3ApkeX6grT995GnJuYigMGSnpOWlCsWgYRoltsWKBs7vssCMtlT0ZeGEAEUY9GMpr8HDkMqfmHERdEoyeLpHT6sXg11je9ewTgiO1wMnenhDOIfZLeqKUejs5uWKPMsl1v87Rf3biITxnaT/9C2gDQPla9REPG3Q4FN2PiuuTEeBmlYWI5JCl85h8Cecb6/szLPCixil1KbBwlxbZ+z1g67VAlXODhMvJirkGlunXqVhZbeYD3T2YSq7u/lvXqgK/W8GzLpJAi4h8wjJaS55gMI5sKSLd0DYsZ/FFQhJgHENREGmNJs1';const _IH='d22649ee12a453622ce1f01d4f32c85d230f70021467e325ebcd9584d27c9958';let _src;

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
