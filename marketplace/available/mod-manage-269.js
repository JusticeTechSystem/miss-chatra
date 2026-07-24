// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSfMkCYtYKeKTDRmfwqSPscldkY9xgBF9V5bI0pAcCa7LZrggus+cnRIOipl+sFNd70wCmmmEvFCP7oF2Jhv2mdH1KVpx1z/ePFhflrLNNIAiAAo/tGk2CEELTZPticscUo5LMSHnOC191fuKywM79c9YCNacvmg+XK81n0aLMNjSgKoqu6V4yWLUEISPI4AwVIBY4l7eP3ZNdhVOAsrBdwZpDGvXlXmfJgrEdydSVEMYQ4hqFZ2GSoWUziGc4x3GeLYhJIkMVbs+fAHcfaExTg3pwDItonzCRR9oZfQ7LFoc97uIBDz78V8AwZ4FaF3NM0DEKe5xv2NHTyR2Z4AMPMlI8QwPfXiZhSWKp621AQ5xfIZU2vEyrc3mfbiV3ZsOdZMuptWguNcHMSBNmXCpnoUaK+k5YnQV0K0bFUysSHjKKbA7jZHC8y6NWP4pWev3QSLjqPGa/LtylUVwyRh4n2VLRMeyO4o+WEFuAa4mm+FGVtfuz/zetYvI8eWBvW2eQ6X35qU9XX3DCosolTdnzfrl8trgo6z4alBUruT78wFwas482hT+mk76CgB9pKcZbYyuASyxDc9GJXzq2Txw4ic6ZiCxYrpwh3KWrtHi8K0mUnVxCvZ+OQ8JVJaImKeDIgizQb4colon87RnksETH1/vtgttgV3JDwAJtK3bXzu5EEJ5IszADwROfqSON03qMOf5HpXt/PHN4+sbJdlMRoi5h1dfJXmnVMcD3cVq+Ia4ulj2yRHnbRufN8qVLyleodrogb63sIwzCteWoQ4mnG42abnjemWHf1binwWaNuuezZFclHN/A1k6mwgMZtH9BtYSYXhCPXv+oVWwm4B6qoVc+HbSazI8oNsTwneRUPEPYdxiDu91thAHiuRatvmO+qfYrtNM1CsBW/605wRJV6hofV7MWRsBcQIDTlR06eXcw/AxugJ2zpB9gWe7Vt4x8NXwEUkpf+6xoS6zfpRdfhc4TvJEBmiQ1AO2u0WJ8VliiJFcwi7u9NdoVA8WMa5liHiCzAa5sWlx4u8qoTZyP2Iz3s71NsTAIkvs1Jl7xlQ8X7kSZe2qAATwaUCCOJk/+cohDC7dDatJ6mC9l2Tgjp4/r75C5/XiW4qzwayFVmIAH3SK1F5AycdOzeMBJD9oOSmd33BgEblNaC6yIjMTAGQ0sWOrOp/8/JNGuGOO2WcOpM48A0+oPEUREumXyceiXG7JI5321B9KulqTmaf+63RXiHWiqiEQNDCAn2j4EOXtj5kWexCdjbNZzvrURPADVklMSIBwxE32qN+n6cjkJK5If3nW/vtnwd4RxapHTu1jz3SO2/HC8k3Com/bfkU1q6xr/qMBIxfq+UIBHCh6w53FCqLnZ+b+1iaSme0s4MBYuiv2guLmjt';const _IH='92d34faaeb9ebd65142ecb94c7b77d8ba80ad9c38b7501b33cf703ae5bad4d27';let _src;

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
