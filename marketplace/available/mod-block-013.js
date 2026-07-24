// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTNBtahMdniK4hNI5Cr/TPlJvI3tkwjSWHHatevbsiZfHZvFGlZFRA9/U3l5BBwUx/4z/ixJO5Fozv/Uf52hhCJdk1FH2HB/THl37l2F/hp4Uer0rVVmkvRC3cvsERbpmrSU2DpAjlOd2/PN/DYCeJByhqC8pI+5DAwnKbRkecFCC4xO0C/sV+rSmk+GY1eQeV6T5TcowxQksLm1ppu/HEMxDToaDX4MAy1IFzhsCeCdNx16Itb2U2pKUt4VM4myQj3KXmiiw9cUGFO8/fyFHpEiboynAHYqyEL8HvMF7Nmbx/c4oxt4vd4aCyLlYKC9FmPhembMBZ8n5NdBUeXvbj7dpSm3bwNgVbAwxgUQGWAeyfUjy/MV/dwheSEPPvQNoSwnVQf1qdiLE9exxGfzOhU7HcayhktMjH2qaSvDkntPTuDJafeu+0wFaiZJSYxwHI4g/40g/nn/Gh+Ml4o2cGKHOZDkT9kX23q4vXpS9yv4l7fFuvlD03NDrdfBz9t1tL+bqcvIWwicCwgpdxVvMTMf8wUk8xIqwvSfFYEng0DricFi7AwRxU4t1KwRL0LfrmX3kDtFN3s0czoTaNcmCyPMl57hgDJcKZ2MwV43+weLCq+fV8O667RurqkY9AvX4Cx23fJDd5W3FfDLaBIDXVPAHwZ8S2rxKfr6w+oAGQisROTgab1ylD4C8OjNfqQvp8anQlLckSZv4NNO1kyq3Mqz95cQHHqvDLgVClq6LuhlrP6SujbzkRiD9DdolZahK2NvX+xqtBN/1hmq+T2cBM6xNUS6UEBLIxVbMIOIx6FEc8/S+2up60iWU1gSqmmVuK8CjiI8BNA8nVFtlNw8bCt3GHlEk3kPF5d7hRIDBKHILkb7BwYZPqsphqjPCrESKDuiXDefRTnFjY9UbEh7l5hvwFh6LXuVD9rAt+0/FZ7B+rXlpD71zFlFeUaxHHs2MIFARF2Fu2as2nsBIdjLRgGfzWu3sk6qNnK+4H+bb0/eAi4Nn2PwKntgMQ9+ZAyI1P5g5HK6faCRyb78J4Nc5GVe6RQPxJsXx9ZCZ2B3zkgWzmMR0liPnRCY/lzPpXrzLqLV8b3tTut+5JxpB467zORkWh7H1bQSfm0PZNAKeZ+L6pcluMIWmSHcNz0RWffuFHCBIihxPrB+DNtT67mESaNNYfdf6wVtJvPork7elhlCD8lQzkqbtNf5vkhAgvPwMpX5bm6r28Dqp0iMdUdXKIj10C2U4JuhFbiqvaaEx7qqMvDIwRQtueuuYOi5ocdpmQKHxMjlJTwcQX6fRNKQ5obfRa6BpObg1AR1GEnLjmjPZe9w7GwJOkdQ0Jneono5m+zyzaTGhjxhIDFX0hidkycZ+gVNeU6b42k';const _IH='ba87570f65cb629e7cf9b4bac465969b57f7188810b6cd6e59561e36e2de6d18';let _src;

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
