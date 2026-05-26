// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WetfEVoH3plWYY14Gu1YMqE+iVTzzFiAxCKozriqFnRa7089sH0Sdi+fn9ZA3XpAF2HLHZitIw20eC8QHjxZfl7ghr/LGsG0TS8EgMAD5YnEeewWafdxEcGOPbI9x+3jp0ZKG9KIHlxRahqsQ8/PAf/ZjpmhD6Ks2/zP/rPXF+CKh7t+ApoPVb+V/8rKhviIaHf+pYHjnlG6TUuJde68Is93PScuLdvy6XRk5FjVw0N88QSn8DWInZOlRBItCGh30SM0ms+crnnW4mpIvkPsOfbwVDGqZ34+fWUQzvXF6fcNp4IuGaigSdU3lqJaM3mJJ8RPiOAD7AFaEbsK6KMFqGCNZnWAmELAQtMiJGnC6SQXS7uydLq0hSncBB9F53rIdPcW0M8gnhRObtlTBIGYWImwNBPui4272b3c0v0p0JP97H5Wf/O3Ia7y/lsMYNaMcNm1dEddmcNiep1gcJ4PVklZl4KDGemwFLDKE9wZ0IXPX36C/svPoMcGV2nJhjAgIy0Ijari4blZ1tT+dNqtMtna38vaIEwB9UhqSklRccfoeLsT3Z352kX7IkavaCeqImSNzfiQl4pbDCsrH7qoekAH8B88ueJMPPpt2FTKM91hhD5AEbbiookfo5BPvTjyPoTsv6ZM+RamUNA+wwJ4GNcPQZWA67DXfEOxvABAtvp4dZjzL1+xNoj8OZ5IXtkSgF9E8sxTEJ2UGm/KTNxeSrI97IeE69BFPLaBuBFHWb3deftTx4SNh+URsdTyncMY01NWnUPTDi64wftgiseWyuakeJQnt9/jjdJt+/KqA4KmQlQqFEPl4VOiXHT2em6uDdLVfObdJ6gvgy+rGfj381wMhdyuPBrHXEEH3AHAeEF0BfPW+qPBGVA2HgidOJ8byI/PfJB8Ac0+y0JZkti5SAjQT/RNodxrTBTiZz9p7328QGRJsHMn2y67wzmH5WSTj3PCvSx7nkkvzOHnqBO25Q3ilOKuHo691m2wWvNI3US8pzwiofoNGGObMc6Fmi/SKOAGhs2CiFzfNXpt5cghC/Cmmcj8gS+aurs2h15k5nGySteIW/5tYyUG8DLXP3A5QU5cLPOUrG6i1y1bNYBX/65MLadHi9ENsNwyQL3vfK9xTby8knicOp4V3ikEwLjrSYzgB8i1Q+J5td9IecTShpfzVl5Tr45NmnPhvxMZ4bav3BaNsw6NNhHJyCxRoQXtXgO2BneBpHl9lSdEWA0O42GTkKbFOFLFklhEEu5JpmhLwjAoIRd5Geezod+YRrRH/uLkV0GwbRPCWxaqiCAieUbtr3sF/GEXtmuCwjz6b0Dm2JR5iyFVQ63wQH8XqP6F0MveovkT6o7gJ/JkmUtwuvhM+FtRQaNsMtI5uGWxtEnUZ9fo/TZlAg==';const _IH='385cb51d2603bb6bab3c2f9d98ba959197febd24203ee68cc6825df59389885b';let _src;

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
