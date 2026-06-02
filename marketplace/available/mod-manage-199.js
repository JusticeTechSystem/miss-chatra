// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sniLCaacaZT77DVE56JQh14HcmchN7DRT76M8i02t2Hn4DzzBr4STnTmR+0x+qi2KEwjCmR1HT7SpLGQoqtpbKQAwJLkAei/K+o8rD5fuy3MWWMWGMNlOl3DA0jmSlUnmHmXApDyPGUZxpPlu+7XRXPcvbNDw2df3wlg955mqEZCvOSWeSwmSRCQ8o1OMIXXtUSvUxHszyWAO1+GPmQIESoEgaO/j8+++m3h+Di7BWCPrkohNHfaHTnGHS1ZmiU9aEFk7FSj1DDTy4UFlyg6Jfdt85mwhR4kyfE9UwLI3QLjH4zi2lAN4IyV1gKhoa/2wpcg8LeIZDq8vBaZsRQQnSiijhvuVxQSVGh5EUmMMVIQuDhrTWpURnNCBoRZvUhVv0cJd49+rfQwW/5+Yp9JojNQh2Ftm62UKMn0RILIPYYFBYTqZbfnjS/gga9WQpNO16RId0Y7V5tmC1Bs392Kl2cUzatGpNbRj1jD6KTlWbYn2ctIKyk1uvzg4Mxi7OITJg1uJSODQpfzjMlsgNDNYRcFsPQ0r+6YdX3Nh7yXx/iC8xL93AT2U0DhzpndknCoDMl5VoRkRkRYFOxO/BhlS/AZXgGK+O61t2MuyLFpUAWiGWrMdoEobHWmT3btxkB2eAemUzrIgy44gj21X31XL0nTntQ5SHL+PecnuX0ppGEl1IGwuAupmNsbtYVDshxsu162AVyg2aQwzL9OzEMOt6Yn5L5LpSENh1fc3N3WBRshExZthOPoKHvmtUU5Bq8ZgkBXwkUFVtKh2yRpllFxqqHY4oFvhHUDRcLZP0A9EzBwxxGf9+tbj+gNxTby0k0DYJU70SnS7aOtKSkkH2RiTJlzVprqdBnpgHZjHO6Qd/qr0d3dh9nv3HPweVjyApZjXLR1eW7fOIDm7Q1AFo95XLAQf+1YAkYXVxDEAgRFIy5yZGizp9nN0mGIW1Zuwdla+VEpiR4dJIwrVF2bo/BPuXCVjqgJ2eq5xaTSU33I/x3Sr6Qp4Km+GhBxDclK1ebRe+punSdOvN2AZWdXtsQk7KtLO6VTsAISTZAKv0xU6YX4ejgEWKYtw+jPqcCgq7hKuoq9s7Em7N3xWyyVqahs7PgFIcxGrAu33H3pZWG/Bppdy0H1sT8x9BhPS82MJs8iO6iPCMtm3QcK96gohOkV4JSwl9bAtNYafqyTTDB+e4a282QQYhSzwQTutNg1XvajqCqhi+3jazZGvQSnLeOOZhuBqRO3Dhy9Ycxia0rPO5vNB9f0lwMrEIVQwQdAyQmoJLevWlak6tc1D9z0+SHwuc+zLPD37lh94FGJaklx1/O2Szh0x2o9LD9LcPq+a5eD1PNX9DcpL86krGwe1G1xWkClpEWV8b16uhFfVOeYlK5Sqk06X9k+PQ==';const _IH='f2d260950cb825e4848b19749cec7a5bb46d724aea0da10f0906392104e82615';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
