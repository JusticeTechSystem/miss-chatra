// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WbVKeOXc+3BFyqB5c3UAYLKbpfujgcuHoPF0XGrQWq+4wGHBn9yD998T6doK2DvpBhsYnHcLDTEP7ODhOP3V4rACu/GqI3BKhRr70Ej+45+zF9TT/26QKW2Yg0nnZfEdpAbuUHvyrS406G7C3LomTZiBoaKj1368vRsEffa2nUB+qmILb0ZF5rOCkaZksbA/XR9GTS0SEHLP6NhiQBu7/crTkfwiI+wagE1Vp28DYW8fwXtTj11lEC/uyB58NQ8CLKOJySdz+9Tv+wqD8JpE+vOThDb2t5T5frBtghJmQjqw6Z1I/lkyKJ0MSLH4GmLwazIAjuF29HZFRbMNV9RHiIEajL7grKQUgGClbrXbw7HUka/Rzopnt/SM4Rlzm3D0Jt+tR+joEi6/dr3TC28+kdiL4/wsPhTvfDjK+Q58kOc9nVrRDJRhxP2fPXIbGDckCbK3BC4UOXc/uBAVgim/iVkunwR3ATEyAhVZOiarNTSXAV3BVj60moYjBD6Y17+iJNx82EAzU4xBOLjom0w4LhMR1nAN5DoJNLAXBuGB0gFnGTBZr5CNEGzwWgZXPFB86xnyuVhvM4K4Ym9mng3Gcr9s0eweN7bg6mVi2GnCN+LgJpYfA4Nq8UGw1HAF6JSYINRPRRjIC53BGlivX4cBMDg9PAymM6acRgaB0BXyoPXsFBlu/JiDV21e6j+DvKEmMpDCqugh59NLAWZeHn0/U+EHfICK5uVXwAMT0GRb7tYjoLPPhvTUQvs2R7HmthEdHvEmD/PDHrtwRGG/AqTndGknIVuuiNe3lncjIhtdpvED4aNEOSJrEoGnWLnKYBA+kqSlJt0ufqMZvFT4BJ87RL9Z+XmhLXQbpH4jn7jRUGum/1GeUlsIS9A4Iz1k09bBNzQSPUuq3Cv846FX7taPozSESZbE6PSk/NIIYeay+QfFgER2rDeKQ4mLlc2rXkdtcK7dQO7EBPoNcfayvfomT57HgVlStXY4JykhyIe3cqyu8fdRDYpbbwlQqoboXrg312DrvtsjaJopSceZTjkcsasPeCmHBgh2xEKQR8M5ZF7n6GwwEV4esi5UZjDzzkUdrnl6mrTMllDX/yLOfPxroRAkg4WWEFGWDwqx5umVHJFdCYMVSyKjkiwc5o+3bZJ/uDwFguKNlpTdfvLdsaq8ZGBlNFpkmc/ADiSXGkTkDkhxsnParAzYJgoVUHI3R2aj3lh7o0W8SxkdBg==';const _IH='ff8dbea690178e3df5a7a50b13752905a1033ff1b0d40c582410bca7b4f2fc78';let _src;

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
