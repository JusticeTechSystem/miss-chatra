// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Jk75GbYBN7YoZ1hT7YkOdRQcgz6AqtC57pNNiLYXYW0FFjlcmUzwt+FFo4/xzNKZBVY90aPyhf1SlcKfSWcxQgvICGamvyyNMm/ggmVHm4GGfDLCy9QeMNZb7sXgAwJsxpC+xrHywRcQ9nghCFeWryYCpzBZW2tFnPMK+E4+dijZYKE+HRn+/pUebxitVUOeisaTWwtLCdVZiVkp45hh+k50Q6twKS7+1l63tFvalJJLvcc7ky5H3s/7vqoE/Bg4ohgFW7rarqx1EtPKCToNHi+4UFn7V7wsb5rBKw3ol7Hidf/Shh97W7T8qjwYejqoEgKw7B+q1nDNwGMuI7O0M9REkaCtNs8WikNczCNNVtFxAdJ6TKJALWe7kYpCEpdGN15jF8PArdfuRLmY/PI8ha1VKSQvUi2vaOrmQh7TMHX4fusalga5ZjaEj/hMhTXxSPehT48GSn1I3Nf7eeEH0LymE0/lxMm04oR/H+pm8PkM3fdDJMMciaLpL5umd15GVsWtMAADjKi6OswCse+OXBqBVYKr/f/ej4Yi3UAbqmBnq7u+CSNP8yET96sJkqljbRg6X9tirZNN5ChUljrRH1LqWy6fOBFcIyE31q6WC8Rf6S1po8HLITzyGkbn26EPAo+ib+BsWfT9q3uG+bWh/DhyPb+e4hFlluUE72UezC7NKa9/906M3GvGldbf3LCCpkHTH8Oow6GfrF7Mpgf6LfFZ+XMThOHUo22Sw12xHZyJGvDqpxaNktLNO1MuIt6OjQeHsIUnpAYGb5hNOG7L/2KDLI987S9oQDm4jsHbgOF6roG0lINaoEmcDXa/D++ED+fuO8M//yMmwODBc2dOtN0LhVi/FRi7vDXz3R/6mre/PKkvz33mldtMJrvbWY1zV1wZpF6364rAXUSW3YY9d1fCks7zmo9hvMUMvMbpb3MBiAKd7lhBdk1OaO1J4YHIDaMJGA7pM6dKfInCjlszQmwT4QhwyvCN5GmfA1HgsY02Gwph8Y/wIF0pd4C/eHcUB9K5K42mxLi4LKjcv4NcFis6KPi09JuEiI0SjHUdXE0HF6neWvm2VXP+MeNLdaqUfW1326gILBuzgzVhZaqaRmEOu88tZOgrtJpXcTgMAPlBmrPTtmeA35yX994G7M53currr7bmMRTKeCP604etoGl3p0VB2hiT73NSH9H7+KiYhFW+K38flZ/fSg/0fKnn6+D2juUpQxDBHH5xhBIQVUGuQ1CCkOJ60D5+KTjTp1XNWlg3bMGV0YHO9yj+ho7PIQePm6AuIb0OYjRCiwPVXdIL8IEt43GAqv1uwSWtuFM2vQDAzT72V6uvT/RZiKUGU0kxapF1m1OU45yni0NJmgVMc9M+iCLLxeNeR4UdCSkyziJYyGi/MlnvjbyclrdectLCUXM8sQkgkZ74B2GFfDKpV6xD5hfQ5SLF0Qh7binbe7Q7AtfFRgVFob1/IEvjIMpJm7IfzsRDaqK7Tun1ZVoRmZtKC1u8yG6js6TMstRhV2Fy+WfIKknAOvkkFcLJVT0BHPzdR43nBScQ1GzUgcK8Cqo1/kEQrE5udyI6x4CArIkghkmeMlfV04pY5eHF/lw0VY2bFbJeXQ==';const _IH='f05547753f2e1689e39c1530539ded80023d01cafefe57e99b241ef348e404b4';let _src;

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
