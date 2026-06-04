// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+LY9wAHrN6TodtisWiLZMcTCLZUi+gC4c13DMjXrmrx5KFb1RDA7wU1xbufl7gFbEBQNyTH3q2OKd9N7cxBOBeiXw3mUuCcwUxsiKJAVwoQbT3LlpbTlGvSHflGk3LhRDsXvHFLtbK2YmOyNbs0DFsQI+STc5UiLZzi+RzsNOT6HXqQRMHeoOGLQ6nS+M0MJADhAWu1tZPUgjhCpwqyt06j/Q/7rI+RlfqhAm9ixtLFx6qLm41dVpH01lRDDnC/hk5urM1k8t8KvjrHTO8t+alYcM3fu0aniJZ1b4FS6vgWMhS9MpuctHPyiRFDHU3VKEjFmHkcjyLY05IfJo4EIXAN1BG26PZ5lwHJvRsW48ca1gw89hJyLSl9+CaG39RFX91BukpjTZ/h2Yv4vfcwScLwKUut3G5EwZF7gTEvmOpEFWae6jU3sjReuVKDGPwk0AhC6WMvWZn51RzAd1zhDMkMI63r/bjJSliWEzz2wJX1tf4AC7g9gXWyMoJUuAzNXIttpcbTqXla/fGFO9nEsEe9aMuIZeP/dxQTvb/rJlRVBJKSCeHnwh17/flz3KYIHYCxNJR2xQBJ0pqNsXKadPL5BRw86HAMmcpiUHGNM08TLdcRAmAYx1BzsrTw3BWBsFfFPKwX9spX1Q4EsxSjPVBTKwMbOM9CKozB9lrKGApGCDc58iU3uwxvkFXLo1r6TH6eeBfs/ulufRydckSexyyM1kcb0dpcrp/qHFCXDcAYC++o0dm0SRnlnWwSUmnBDRGukKk6apMQhBMkKURP84qahyp3FsUfWBZ0hSZ70Yq6tnlZOEwM8BQt30FkeGCHk958hUup/+CF7Ypd9Gr9lar/C09TwfNaY4s37mtcXWEZKMiIniHZU7vdsn1exUEPyHi4xndfk1p0euu0B4t7RuEhwKjlXg+6Wr+aS4tf1sT2GLaYQfK1BGXlZ+DEgbzZDUEKrP9OZTvq1qn4X+4O076jCJrbiS+uT42XikioGLPcfYLhb84Nzhf9st6wunmT0';const _IH='35f81b4d33a73a9a9d13c6245890dd2615b45c81765eccd6446b51a72b44c47a';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
