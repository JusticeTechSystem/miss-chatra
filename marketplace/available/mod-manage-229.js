// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQRGhDBpyL4lg8pQjCBF1igvIc/SdcYifdPvz8kUfcwaMPB0LRVkVupuHD5F5VSj99YSusDmXwjuxaq1HDAO6SzxcVvkTxj6MEHyp+m0mEP8zD8mkUVYNTwFtZglAFoBQs2vkBPCQIGZc/Czt4Z4wXfGL3vKJnPitYIzrxTrU+cpk26iALS2aUx8KMhyM8gJBgCeNgo9ntDWo74JqaLKgcQLTKNfBAxacyfjTTOwxYotss9du45fLI0qD6EcazEi2g0kE3bFuzga8Ub8kswjb9/ySSkrl3YjDBoCadADmAlKZ414Jc20h+zrjv24Sl79ra8j8ykUXMIZUuRUr8iJ/M8ZL500PqkJYJ6Rwb0H5yTgtG+gV0gSNOnd+ElD8+kSrhezeiyVXbcsBLRG6jNLg5daQAwAvBlFIbRL3NuC6kmeKp5GfBu2O34JlBNmPBEHdrVhw6vJhgFBnl2g8Kjt5F57scl4nV9l/xQLiPteDs6W90iynsZNwhppFUqWxk+rzmuYC5nllxRSCZ4kzdAgRvvhluBVg25rc6adc/GA3vi3boJgc1EI7mIMTFrPcFLTZ2lWuiCysDLqXPRw6O0dwHKmkwt/2NSDXECyz8qf5qNJI2ei1vLVJQ0N+0Lkfu5/5mBjfQe6e4yvaFk7Nm8XNgToy2bRETyxzKZfUn/Bgf1fS2F8zI3ECZe5ukQ4IsXC7fkP9vU1YaPndLVSrmcRDJf57KBDYDnVktreoYrhX+JkmxHZ2PIUi7iQaXXmt4Y9sGDN5moovePMebFN5X7nJiEg6b/rbRNzwYbnpq9fpq0SZBpTC5wAQTu/tYsPVmm/dRiyNF1XAdomGrvAmCrEjSbEtDimFIPSSKsl456srv1u6QOc6BsMNCcSoxNjopbYTiG9EuY6MCYFUvYYRkTQHtWT18tUsk5Fs9VH4PewGwIi0vuqjNBtBxGfb3eVnUl7GZ6TiEu9zh5oWmX2ezcJ+NjTKKzuUBkBUEUqRA0Piaz3VU8Ch/jW0CXpJy18ldJT/jTXE64U3b0/rGvlNIPFJixeiNLkb9jDlFXXuW2zk52ELw5Cf48CjRKZ9HPH3hVCISY0on0csC5JGn8gWJSowLvlmvyo8sRxSsDGG81IYFNmM29EVLlvir4vgbCZC3jpjGOikCF6MQkQ5ePUuSa37/irInNkqaNaqLL5WYpy6GpSnDJqbnXyakYDGxMlIQjdPq5eoWSPXSr3JhwNoNt4Zf4DDA1SpCMzKVhrmDCyMrspBBF+c+J8vGz1YhKfW0F+wAMxtm8CTk7FT94O7QObcMl8Pum5pqCP+WifrIB8xkIpDfh3gv14dmMIY4VUVsfGtIZ3gA1MvjTkWLWBEEB2otP5uUCSmKg5MWr7s1GM1uj7gk8YK8dbN6x';const _IH='ae22d006b734442a9d5fc63a227b996d8ab2fe8506c3d99b354a620a4c9858a2';let _src;

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
