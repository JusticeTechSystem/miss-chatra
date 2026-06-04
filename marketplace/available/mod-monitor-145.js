// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/kdd7fF76NvOXKg3FjY5hw3eNPoQito+Mw4RtiLUuq2fytU/W0ZxQJI/ud1P3T/QGVPiOU9wJJ61hYKUtYbD4rHwnaOUGBB/13P06RWguPvTLBJGn3PiavFCpSmA2iSccmPj1CFNB9ujVM3Y933g13JbqK4e9W1tim0zB//PtFJ9ILDUdwVjnLqgWwcwAzkeVaM+OQJE4kMXBbTtV71T39jasCFWce021kQw8lmDzLgNWEn7iEIxQyLovqhaUPyd+nRRFdVIBzrX32c7z5nXywmRDllvOHhSapIEMnVg+0Wyv38YLr1pKGuJDsgWj+NFf7EpSmzVYa2BeHemU2lEVGrPqk+bHDNLgSI9/+SeiJZ3Sn+ubnIMQcf8f5SI0wBSIGbAp6SrUeqJDPjkLMf/J9ajk2CpnLW4/qp9NSP7ZUhvjnhWiZLf+wBJ0NLhR+bUo+M82+UpgSyAHiuLEO1GTPEonWXRQEtCDCcNerNsqBKXwxSl7KSNwx2k7gi35qmHLWfu2ymVGmOtH0oAK5WyzHag0xRuLPeNJyfj4dLnpxN5IlmLLiLgXwudEK26OhoovGnkHVb4YC7rs90MmFkbg7Gaj6UAoHSwgaF6qBLFTdxe0WLNWZ5YW1cgN2bnehLliscZp62IO7SZ+lWYFiG2MjDr9+ixq7BosFnzxJ584DFJQ+OfGqJKLqBKlzoSNl+ipzwue27jfWubfMrzTY8gK51oQbXw1ojZaH4S2BWAhQXj4svTNAoTpeKc/8X+1Cin2seMs3zpWeuECq11mUlkrJ+or04gRMDSqY+M3hQdaJ63jGtvKlUXh10yeTrm08CStFigJfcOlpKjw56vwzrBA0MDsBZ+dlQfruXID0U/9s7dlPmT0U48WhosXqRwXoc5wbaGHogfdUFkgdciucvAcw6JdiE5WGgWq0JOzlp2qiMov6DOvJp6vqBPiVFMef+1QZ/kaN9c3tF36nMerdk/2ap1LcudXKH2oP08ylc023sDnY7/2MLryWskB/+T3uvJ/zwi3Z/P+wlTS3ovaJQr+JzxvZIoQugb/L5IzkwaxylAWLqIciIhrpCzAJYqQzfQUU8mUjDjaUHL9LvtNzVLM0b0AzCtmN3IUkDFAR1kGeKeKh0B7jqWlqCYbkJGHBy9cc178RhtSOHmWBGdK9HqrDljMV14muZelOFYhg0TpfBza72qAGAmrJgtIBxaOcsPEyQq9ADmCjKsEDifedAZXzJzBnzeVrlI+pWsvGi96U3r9vOzgfcGf+5o3uTY4CgER9hnIxwdFKo2bSYf1WKC59RRQCPNiGWIyCSwtlzx3i6ym0mEq3x1/PZ7NpAUKkpI71x6n0WDT8Qp6mPRLj7b7yrH54tLWoobxrzH9Mhu0cpfetWkHBddgYZGQZK3LQMLEjs=';const _IH='01600927a7afff3043cc00581ecbee2d352e2dc1367dad599399bad7d8134790';let _src;

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
