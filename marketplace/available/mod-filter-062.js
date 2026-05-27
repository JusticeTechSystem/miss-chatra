// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jq39HeYxy+RmuwjdB0oY9YPWhNNgrbgHjmFs/QakdY1VnDGhIBfzKRjCA0IbK9NvvJm/71YLub4m1kl64sTzWdkGh6CVNMZ2s+7n/cGZRirxp1ex8uxFBdLt+VSo5smcprQcy5wd/L1F/sAtkzbw+NPiCQ46LVEg2qGkE/myH7sJXWW3QIwgq4gLd7HAvwCdM8LFcVnsVFGBfZdNzuWLvI3fnFgCMnkp4Zxc3Da3m2EKneIt27YJYBtdsCz8OzTpGsC9TN4xrXwcFd8nnTPXhgoARnptSCLl00O6lNl0J4no2JBL2iyi+gxc0EPyWA1VljpMT5+hNdAs3VW3IWAORdLMvfZKPK2UzyDjyw48wfHsxNlbMNL7WdcqXgUluw6pG3YamlZBOjh59Auq0SEbrZQfCOZobozCoa4uTZmZjNr5rZI0vg6xNcBKitMDaXr/3ecp5oDTyfmj3FRjHFMyGcTmAVc6gdrCbzQWRyHgT/jsCKSZAavMxKFRncbc7b7MswGmF7r/iJwGWONOO9b0f6UjPdzdQUYRdfNLQWU+eCeZoHcvkxpcwut4ggkeUzHZy4oJLk9xoY5S6+6/I5ajfwL5MzynG/8zfn9kiDbhQJiXz92S9umpsRxKsZ5PO70cwdWGFTk/h4KceVDDp/mUdKqW0KvBs6+TVkx6lqsK2T+5wr1VB4+yh/jRPd3EZgTaXDav7o76wbEFLL1bYZKw4ln/OpDePOAAO4/z2VYk+FOJOFsgSfkigwe/Hw001VFfy5GZn/2P+lYze5Or6fe09IrYg/Ma7xZEViOsa0fBDsy1nGxQmVcpDECGjFuMbKzY0O+Mf3TvInl57CFuE1TdhzhwfxlrIdj9S8S4mJahmbwNRD25Wq1HZu0+MPark0Hy8FnH+ZzJuSvcBR1EB2Z+tzR3CjP3iUQcmBfiMka8d3YOcZprBX/VvVN0qRIJIbAb/az08DMSSZf3fKvT48EXFiFb4Df24vak6Xe3QIz8vDzbrehX7+npO3Tt7hzhW+8bsEMaumJfR5GrCnn1nmqiFQqH9L/9g0Iu+/t7eC1Et/ugGJ/IXaaULehW+AIA9ACAQMa4xlPSDlHy3n6vp3bb8nFP0WjzV5ASxWO5kJqQJSuoWPNqgorzx39caGtoEzLtGTTEx9sAa9x7V0OQGZQmLK6Moca9ovluILANrjOZ3MAKvrPQl6/dHZhWW2G9TEf6JJpnSuzkzSio10ZWm+SOmhmD04qgxq87Eo+abgIxLnX17ryHSRO6gzzG5f6iOFgwvuZfylkQrl+C5jQXuXiyVnkKuga+TUE2vfYK9/bMj/EqBSlTJFzY2RTHFN0v5za9fpY6LayDuhy9PlwgKvI2vhAdfAqrolmfPObjmh0XXsbCnNw=';const _IH='53b0347995cd3411c45f741f7f1352e43e41540f6e6b2fbe645b7d941bbc4795';let _src;

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
