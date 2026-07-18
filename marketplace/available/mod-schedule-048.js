// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRG/oMJdv4rg2x+LDYYyCUvP2K1d3egzg8okftRkmN2D32VUu5dSPrTVLF+QHjECJS+llj9TvSDDUPUPTgkdZPalcwqGMAX2wyR5L7ASsBRM/qn6aBwxQvTc7uiofEGF91kHnaxz8JbFQOipw4c4ZCr6bhRTOB33Ytxv9NmY446xpRVwjZ4tx+RWmZ6ITWgIUnYkhCibsMrxLYqf0XLgE65zSoxatjMtPvPt+ucaCp1QIE8ESIyMDTSHGDC9TIgwSnEsvy4J8t4fNpcLwIou7Cq0fd1jQETl7MSAX5RF73Wf9C5EcTJsAA6OKTLt2gq92ZxZxbYRydrKjDBxTc32wa2+DmVr5qqvvZvg9v397KhPokrAJ5KrDGehTkz6nSewSwwUFIPt5F0I+uc+v3psOVwIPEuBLRyL7LVrsJ05cy9WFDTSoW66sLut9PdZesb9OrJgnyYYUV0DRAf1sumv7jLbJGywt8OMAGEAGg1M1NkxoW2JLue0IztPMTOrSDBk5NWkYnRdNHQtW+A6wFUOEHN35Gqa6TdUl9X2sMd6ohMNxgcniYNXp84wkC60D5s7Nm+Br2NU3i3qKxJDFJIfZY/s14RlvbiiobCZF87NFbd4fLvbwED0qNeebcAw0zdtBkhBGhiLiYYREEn5vNhlT0QH0dH2XY5a/C/JjJWcobQrjRO6cFV8uUMRBVohChSkhQ6Ub6K6XPIO1RhDcxfnI9fS0C3ypDO4fOdjKlrq17hruGsC7CBjYNxJj6/RE6pHnSi5WoRrob9QbWYH7qL2YPNq+X4iX3WxhSlw7QsdtiF6ACJZTJpPH+toLKAdE+K3MRmZY4xrIbagd0j+3gxoTN/T/muL3W/txeZGpmyx8Dgwx3lm1S73IO1psZpWwfw6NzUQuAy5ewMpwpidRGfuzJUeOMcMjtklaJWLPCaXHcUmrjMt09IbY1omXvgOlJTeHlZsLv0ChDRg5sGpbCzEUVSUMR4U3DU8JWNQ9+hVhoLGxagTplfOvqBKXR1FRiPqw+rP/fFwPBJC6xB6OumJtQ2gMWny9CGRrLFm8KbaQndRwBDBPp+iblqKEx7dSLW51l4yEruodLohNMzPJwWhu17dg/lRRInCdAfHBPAnic7tMdKTfnfhj6L6DfBghqNIRIuUx7u4AV3kNrXLCbUOBJbNwdxSjbaSRjIe07MHAh5NxAphxtE6DlRUnUPd1J3eog1TC2Cg7RBZCKlfpmNOh97ismaElg7GBgCJDyDypv+qV9FcT0SEMcJ/J4Ko1Tf0UM+HaUASKGCcYcXc25cad1wvMTGDbogfoBa3A1HdfbadQOQBEVjMAbPL80uzzA83bqlg+/MA2Hg9TLwhi15OvYUDB80i+jJK2blnZnPlbM3CG6Vtea3zXcMJ1f056YhD9lqsc62j+BK';const _IH='1d2af8915515bc7789d15becd7dbdb7e7136fe8b43a75c49563a1e7851751bae';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
