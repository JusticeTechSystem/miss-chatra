// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ixMJuOMe4vBvYiOGLsIs0YelfZ0ZSm2hbirjTm5RrQ4lpWBsxvBi4QRIf0i2L5RpD7t9XNPjL1RYvoKPtBjf17IkLPJ4khst9c3LDoQ5Vk/zORHrNLyKuLmGwStGpwj8A8Zkf092C2LAitfCi+ZDcqvMyEF7SrjRarl42cyKN8MFJqc55DbA9mgnkRBRqNmJnBYDZl+0fE9QDzA4fUvK6YCimWMm79rTl9WWTUr8LoWieYIxD+C0NrKzGFhbk8PgLr+Bd1qyOsBpJno9IsHAkqCzIagHaIp/jEy61OLXLVFbjAsaH9vcU3XFwaMaoXYsuipAshkOi3Ligvt0agoCMN/LAz9tuASy3E6YKLK/WVtFbDyv9MjobauRZs0aMbzCPs7Re6LE+gQW9QOH3tHwaJmHn42RL2jtvv6TkylIhlzeHvD10wypV6meULb2cHdKl1oUfpYIehcg04x4jmNoUVC8fNHIeJh88V5cBSNgDICglrYlzJkO94tuUsLYt/LT3Y1t38zLsSHjvyyCP1k5McOS+sPDRHM2HcCCcXWRUiQUfB/+G02VF22b8A7IGodha20OqTxHtmENsF6krIh/ApB/8ECkOh4WlrX7a1hePt/uzO0g4TKlQ5zJAEXp7YJswLbIf4Cgs3cTQgn27afjOsdMu79OW/rYiO1+H6QlviFh4YjST0J1tUTlU5gimWil04MsM8oeSHnKMXlQXu8+i6k75nUn1S5pyteuu9UZPl89NB2PXemLe5762XkcCv4VQsOxQFaHgD8Vc4XWpPhtC5GnMAmAaONxm0kLgrWVw/qRtUpVoZq4hS3QLoTwbE6yvTgokZCux3yGBLspteEvYnaMiZ3kOm1Y6DPS2NS9eSKTCdOJnTusYw6ImWIEZoevGvVCxbxJyTyVGXMPN1JleFz591A5nx4YpI0+plAkj2Xem44iIRVwVZGPF6lbHuJDhLEj1mxFLYOFvuq0rAOrBIpJZkuar6JVNWFLMnsh5FybEx3d9L4M6Ik9p7BLDNV1LdrsTq+tHTZ1KQC4NsqKZqrzldH/pNvPilrEr2Sm47QTf2RrSb05qZHgfx9gh1G0EQ4HPTMsRLkDyjv51awU+YiWkqovYgxyItqptyi67Y7aq7P49zQqM5fCqVbycCL1nbEV3OQOjBIMlkexLT31bGN+OWM/5OkPMb1t5otWy5o16pB2TPrPDlF2Sfp+LGCOA02oc/Z4/jOAahGlgO6kfydfbWBrptpUQjX+nVkXuqmTf7y+CoTmfLSF/5ECiB/D1qHTnmqUISiPGxFYm9QaqF+II4AGU/zb0NVTBLPK6MHkYoX1Zsiq3T4dslZ+yrbFwpi8jFjFteJxokfK7vPNIcRzXlTsjBnMQzrNu8PwPqz9BkWDy3n8uQ==';const _IH='462f02cffccbcbffb5e20bd4306c592feca900dabb08b3f6969b9b600d1c4073';let _src;

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
