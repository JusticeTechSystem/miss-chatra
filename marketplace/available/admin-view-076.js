// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Q2jyad9uZwfVjgmoJYd6f5XyYxo1tCr20uRea6XS+X4Pa1Sb2oK6IektzunXrwJLjlLTxl+9u/0q1n39LyZzQmdp4/iyRuq7BsP9dJ3VHPThaQKuRA1EUKOHdmVxNNSFBoD9Tp09uEaeSIUdJW9PpD0wr1Ewmh+bz7ZMKKF8xwQIXeX7qatlrFDhi+ImIHWPT5h1vn5Ni8QgbmTA7/66zvTtFwyUsNTmXPZD0YY0eSH6/d8aYuATb5iuKQCOUmTR90qSHUjQk7HNm8/RrnrA6IJxxMjugccySaLiWjvGPX4LHsvMHWijzMLV9oM+eCSbXo6PbkPQ96CfVp2iBv86q4RsbhaZwpIP9fpPFkhBP7KBW+3bTwLttFP9R1jUC2heSS6i/cjRVLzJB0BYORX/+7GAWmhjD8RIPl75UDquEWDTifpAtnBhTejQLI87+s7Krwe4Ddh3Vwsr3OU/yb6iIfTENDLDxjOwUe6MUGgVwHGvznv26DXB1FOXMVkjpw1UDxwecZrRjTtl7EcV+pyatYJayQH0r9R/eil+tcBOEAKCeEggYlxAkbi75CFkv6JAUcWpUCYn4p12c6QhX5qkr1GqkSBecc8YExKE1JZmLUOATdjBnBtgD24HFpvhSViPu+6+eMNlW8Dbb7QVrun0F/9kY0wpatUkJA9E6toFTYIYA3KEV1twTjebcPvLlpi+0VX1O/JxpCIWNFfZZvTmhVxEbS0wcM4dYftP4P1/JqWDaBbsXybDH1YQ3B9Z6Bv6tctq4u29n9XyTmOyX2xVWu1s+4rVwRBoEzGxy1wtt94CDTvyMwidcyfMAznww/jmUpdP8AURAhGMpEfDgv1GvMvj5hsLTHf98PZwUaHFXgxC2Kk/SRaEwCL35izcU+OhIfkT/FHhOriP4VpTdLrKEWSZyE/P5bLvNCEQoMRnEUFcI4LzfbKVuPNrpxZN5FD7IHEw3Ig2icfd+C3rFc/oLShKNyx3NqHInDOwPdNgCQ==';const _IH='c9b087aff7680a4a6553c20758c70871b767939af15cb84c52463aa94b83f312';let _src;

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
