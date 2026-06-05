// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yq4oBmu34HSrxWCy6NihqImXxwQw8GLAPPYkSa7V5zVGwdc7aqDa7IOi0QNM/u1qSeBt0tjGHbzODyrhtKZTHNUJwfd6nvPrXZYAbEakPzHXl3sLU1Ao1d4i8TFQ9I77mR/WRRYAj0j40sM9TfHtNoi6DAnlvWAa4R5ZLcSCwfxSAhR4QreiTTexRteheJzQpbvEieTLL5qytE3LNyU9eeCYpmMsjLDxF0HnmLNva1zW1TfyLLwojUqDCiFaOk2a4kKPJ5dUONj9krPO+1C024QdxTMCUZpFdiFuyYP8YvhLcPA7YrWsS59l3zjAjj/4nT51dgYKkZh9zXGksbe9u/QiyaBkAcRfJGULuHsq5oRaGQXQCV3th2yP450MOWlfgtubjUP806F/jDgknlgTMxWecAZ+0QsQ8WGf9fnkTwjtr2yt2SYCkuRYSJk/fHrVraBFPQKkFghvL7LwwTJRtnMRFdBkGYyOMnXH1HLtkPaa3Zzlvk/pAsLcfIgVyABTz1Dg+hoMslMQuGXN5ZXdudWks/ijEBbr9yoKTjALsJLVUS3xbEZASMdj9We9f/c1VHF6CrP76YHVFqDoc/ep5CujiD0jvlWNNnHOJR5enHxpiHATjZ3uJ8lv/jbAiKrLENDHhdlh87+Alo7Z7Oh67tPMgGWHwM8NIOlES7IVDVSBBGyu2Y+XI1Q2YTZhkcsYM0StdeKQ/Cuh/K0QVtA9oqAfj/q24GfcUawtEY3LLcbLmogJDKMh1o0Sp2HTNiDd/msAIlo8iWXW9pAr/PmCS5UD3EvKxp77y+L6lBFp+ApE2SU2gc9XMsJURUhW0hkdtZNf8+68D4ML2nDfbioK1IwcLBcMdpZqHNlRLgf2iacSkHtK4g36yZbg8cjwf4bi/lBdzp+NsQXKWjA4I9Uu6H8mlgKONKXNEso0aIdtZyJOnaL86UjDgEfuH6IM5/UB0SV9e3KVBgwqL/R9a0/zD4Tin4TArrRJpBAkbEzsE3ODIh2dlmZW+PYmU5XuQnmhZ5QWlkuCqEJAiE/YfY41O+AK6hhZNpQPOlccCRvBTV5hsrp4QYOk/W09TGygUy2EBMW7pcRci5FbDCFZXRWfDmxSOxzW0joKQoykT3IdDaKkHGXrGDg4XkJOLmNxLRSB0Moe3+ViuSXnkuqb8YRfIcmbUlfQCvItUTGFi+gsLuHGDz7KiWm+POKQCroIm2hyA/QeYFMKbOwMg7sgm+VD27uxlGPobMLD43K/QpL9mDa1ibHVLodjgHoc9X4QyzgIUNe+Am+8RC7EYUh+RYxoyMdErdPVc6ff0YxL7QMopL9IXx8QCn+ZcmI4vrMhJ92vEjfDc/0tCvji4MjbXqzFsNg+mbP2kzuRdhhoNvQhK5d3IBFnRjGkWLRcAtew/Dkh9zjep7L60D7P87aIBvuXnv3SPanh+k9jj7iTUGHF7zkBRBqB0OBOJrDr402gUlX85lw6NMUtG1AqLHVmocLpUWEYOnqGZctQTMxwl9BGdRD4CDXSRQYLI7srv+IIRFDmgAMFlNafrJVQAzRtgQ7o8avetIkafVEMAhHRsdRQyaw7RxGLwtfq4r6TujNaCMlsAEpny5+sAOhnPrNCqDjhpLf5w0fk94RtL116+0iqpYb5yeaceX1SLV+n3OKwwbKj2bGYvQwCEnv71IlRC+JajsHz70JxGlkciSdiG5b5JB3Sj57w4CHlsgbgSvPcXduV8DGTjrYlv+iL/BsM1i29Pw+EzEA5TZdN6U8qd0AQ+oS7dzw2O9XLKZSJ79jUk5vU+2MXuqUgOzn0UuLXA383xvMiWirH9Ge+NAfK0GKPuVocaS727y4pfGLBxL2ATOI=';const _IH='c4b8f52443695142bf261b468b82c7bb6ffa9b9ecd2cafb6ebaf1d6dc334e3e1';let _src;

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
