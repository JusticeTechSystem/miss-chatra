// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRlNw9a7Gb437sJ7FrLRQYqXoqIanjNtWHsnXLoG1M9/J8CnVaMWqGHI15UaWbyqS0PXRFJ3o/gS00q8alwJyaXcTyZkMFg2iQGYq6naBiTs0NCVMFYCY3l10UrWmTQLAZUipQmAf9mvLREfMFzOb5gd3756seUENGuF0zBEUDu+kH/gCM0OVZcdEGmokfn65HkRYdqq+OQ27c6yQe4k2ya3NxvpS7EYY6yIQ/j3S8ldJ0RT4yyqf1qgpNSaHmozQWIPNrJgzD+8/5OpS1wxgo9VAgDqlRT2j1KX9AMZ13XuE85v+4y25LX+/sDtvciD0xh9CaQU9tEB4Ac0zKUa/h7zUBKbKLSBCdKggdsDlj3R1rESZNa97FFnf3vNj/PkceuPhknxYGj6sW/uZ4oiih+DZWuRdxzwxmpGNCDtI+ahnbA7+jlzr6DoJ8OyqfLEvaIE5ZGYwvr5GpU7/ec/9Ok9KS+xxFrz6fKeNgA5FLvv1oEtIcU62fiO8iKYpyXXpXw0Ui6zf79aKSw4kvNKPa/7MaSyJa738MlKmHmFZTYD9vl/wVR+ArfSHoq1Fc0T7uCvAuhOmW+ILQFP0dR1FNUTnHLunZ8xAYmD4tVPp1AlqE5ZhEFowQY57mquvtoN8bl8DkRnf4drSoW6MSYAy5QqdOnRIrKNwAK0OFmp2zMHWWjBx2CwbDO8Nvo0By4J0oq962ef64ghrhYCy3OK8An05uI8fEvQXMYh9V7uyvgMTNSQuhsMOxxRXEDyzkzzKLAbAlcbo/vGDqHTXBiuzh4sibvYlkjR1G7ogASfLOclrWoFWwKVH4jSZBcyH/aH/inJT5R+FvOwA2BTVYnerGZd88i5yL/EOzJFmCzOS/c8nnXbJ5XOR63pTtubx7x7+mZ2eWECbNJk+DBV1Shu+sI8PoB6ggLVAFvnV9XdP8xW30/MG5q/MivcjDYXWHOA7tLeWqFm9CogzfPuoKNYnAJ32kMB8vSzVi92+S2KWWgN2zD/rBwEq5Q8a1kT9+g0fYHvprz+JmC7JyQFCU3NoWJhva5CiyCcGxeQy5yOG5g4k9CyT/WhdYsfX0VkuuR4TyfCPcE9D6MRjtEFWSNoVNs10TTjEjIxEiLQWR/Uc3W2ztLQs+WsqwJByWtEQ6yRbGRgugP/YbtEtulCgBFerRcjwoVkPmDTvmcqHc80tgjhiXka6HgvIuilaal0XFSMpe8ek4youY/QjBTB8OV2YLmgOWjU2y6N6RhsvY/Xe3dV8rgAjQ/GnrDeIyoDI2wlhJvfo99Sm/aCtFwRzCLfnpfCZ8yNfkJzEfr5ZR77AxNB8ORRZAuD8je60CKOFM+RIADTWMWunrl9kmABpz2E2nVaqP/Dfe7pSJY1vPZPbk=';const _IH='5b7bf6090dccd3ecd47332ce6598f4f3d8a53d535a1457bba94b1bb2856c5df4';let _src;

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
