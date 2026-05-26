// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oDLdyfUl9vBcZtXH01Jo0zsGYa9q0D0TzkS3d+NZohHNlQXxGhp5c4skNrWbOFdNerXTrzIMrZonzOv6y4gkBX/sszZlIu161DrOm7FXNwQojXb66lpi04uE81jYx1dFhCgVsi+QY+kkVAX3PcyH7Cqrdf5MECSpE5nXXn8NRZq+99ZDSexaiCh7TB072tSv8qYILnY/POK0FKBVKc9UCTr6ad5VlN6Q2cktwKxHMXUGT3gW3z8MApspMPDLGp9JAclbzU8AzuhMS/N98X1FEKzc+DZdDEO2QpRGoxGx/6CNoY6jQqSO7kEInxU20mqHOutPtsxXneCw32blkl6z/14gVp7lk7byiODkgNLeheUlEyUPCnzbP62Q1Xod6RkKI4ZA7/5pcSB7faRB64LHbml6CCDLimHdZDQmkWw/qjGrdu9s1ohNVbFcSthg5rH20b3DeRpK6i3Lbaf54sf46AzkKkY9RJqPbNZqFOKO6SsWyy/0/UPp5zuR1qwLUW7HQXP1EfuMS5Iws5a06d35wK1dwpHzDo2gIOJcVTzal/+azNf5niLbWbDRG2DNCvJWSp3IK4BPYyRRGWSH+DzPSaPVY2r8CMlshDY/Xm3i1ydylL5WkDEdV7yh0fjjMHNoFR0Vaz/kAkqQkLNmY5OY3y2fgWofxJpA/LkEQ6w8HgdsKNuPzkY+7LQRBCP+Pjg7mUayHRTkPp5SuLcaIqyHV8fqoeByX6N1ZqRkTh3ZE12JV98bNzn5VzIzY+H8V2gICZPmWAGJyI6FzbmuQFy/kbT+0E+x02HTmKl7omGe3RZ5/pXvTWt61SzHAfxNyXnr78KziP23zJaeGb0KM+EkWh8mdq6hYXsBQ9xlkGrmUVhoGCq1YgnXRqMX7uJoBxB0s7wLbJbXoOht4kAOR+rVSB75D3kIL/aU7wsAzZ+8B7onlwRICBnSZYzuhibpp6N9UDrGtv906MdkHRgijN9JLR1b08C4kpeltBux8qmocYr8ns26zgYsHc5kFamZGzInfz3GQYohn5ZTj2epct0g2OWs88Alt6VL28lZyQpVvDS03pCYVCbFslVa7sifPPYyyZQyfBj7s6gRiAmbjzXA3etD2+knt70wM1lj6z4HiBqakbdV6t03kJr7n9lAQZKNXS/+UfQJbzkvlHnClmFbnwaY7c97E3RrShZhS8ZkR5KV7Qoq1DBOy9dhvGJ4OlqoIUKQet737qLeWUcKITC77jR2m8lwTPdBWiha4Sd+E9B9+vlAMOt0eNtOy9pdZpaxPE6HL8Y7wBojztYbYcZPP0uzXP6WVkyO9ostoZBgvIvQb/2951ld2hknby9WRkBwyuvkEhn48aoElUC6fbizCxdF9tuSa4nzs1ZwNUAx';const _IH='ba0c2a21547e075e2e2fff82ce287927857397010b1aa76403db28ad69e707cf';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
