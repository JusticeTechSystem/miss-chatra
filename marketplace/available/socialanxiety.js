// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTkrg1owom60v9WaTJrQyKqFssvia3Nzm022lBQakPPp0/iscfBPMO6zLcNn7mSk+2DB2jLgK6w6SAHeEY1/YvTKU4qq0tjd+kRgcfKz1dxmHF0gQrEdfdx3vUUcHtlKn/hXzu2KbOGdZ9eV6no8Du303Wv/wMFmehz+eL0R7Lqc01EPGy0wsCTI20L6anCEpr6mdTbzBarubRzYnPDT07mux8tnt6JsLCX20qITSpoTSyV1y7pBzcaXItf+aqiMzsFwAFuqLmQbBIbv5YC64VWJ+nIVcCD2LZxJQHrMs0PkTpZ+zKNcKinOeT2brOBf2T+OT4a2vMuRITiNGzMhdCfW6/tPdG7zstUzowaw/TEWAeQPj32045IpraRkKOvPXH/q95cq31HsVrmMYznr0jPo2SmYQMgqPfxLsw+8gY2NqiVp0ZZyloqp/iMn1ZgSJZr30UI1qBVHBfBdU8ADzDPmbsIdxwIG6QWSGnvCuECC0cx/uQyf3zdsdUlgah5gOPmxRst2TGYjSd5PfpfmBVDh8goM4aRWyngO98xpNciV8sl5hDX2eQPzuGQE8Azcv3DW4B30uh4t0CD4ahssOn97+VZW5x9vLmbzW+7RDQaoVc5zDgE9ie8ieW8RDfe5PiF9lsRNyMYtUpuzvz3a3lSQ4Zb6mpd4oxhcoOPS48vHbQQGZiJHJgL+MOpaLs7kmjLMgcixxW8nSEjStcmukCHHkjCd74cQig6jha7n8WdDULh/NbH9xFKacjPLlRoVnuAjlloVUG2I+FgE5nVWlx8dHSPIzibuH8xEMyh52Tk/gz/MZ+9e/yhIXkoVDwlqEPdQa/WYGv3JxJuVgryPpUBt/e7ZSG88HSjsT8avTQ0ttKsOsnYyXmfpnAdvKTmumNtJQfTtii8ZiooEBE3Rypq56Fq564ZYtk49qCkJnyBMnF4KkGSMN9b344dCzB5M+Qwgbf8LYG2+3foo5qUwP5fK/EGIHcMdnxGxqbt6wHMGUPF2VwoqmUxVV7C2/0WC9ZCirMlIza7iK/PkAdG6hDFU7bU1HLjZYk5qqnVDXkHEJZP/n0plfE1ieivNDhwIW7g06ifRHF+pjhm+87UYAiS4AblRzfuIX/kOWK4xBAqJVfh1JUSsfndEPIp0BRRRWv+DnzAvivPTBtImGwOmOO0IeoJ20XXlFd0HMd2LBBWUTqZj5LliHpO/hNXyMotOZW1z670bGEl';const _IH='ff3a03afdbbe438ece053254dfa470b105c9e9aecfa4abfd73bb3ad6e69648d6';let _src;

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
