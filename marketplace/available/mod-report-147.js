// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSUU0CfgpkiXN7Eu56CeexDJt+9mkoSGOGtog+y0LlWgiZhKF/OJ0QI6zxOZNEpTLTHC5szqV0MKotKFOvxh74NgINWfQsiKzt1D/HXft41f8fcUxB8l22k/QwI0z/crAamTFZLvmww6KUjLkH7PfgPqvR092K3PdLLbjrKJS1KNKn6Ga5USvmQ3hM7oPRnp3YNzm+cZ7CVLNdtQKt1uuKzkKqiD61b5gDZibmJO9VsVt6JvcSax0Q8vUcHfql4gj799ypRkbkzZHo2P+DFkzDsCYtzxTrubkc4IgYDW2dUdj0k/9RyXlvcWymaYL8x09zE1plQmnGiqQTkQGTQSBi1A3Bc50kqs0ChqluVMl9bdGhEaDaVV0WuKry1gHbr5B4yKj6KhaFk8Q+6vvoX5tIu2M/nVCIRQNBcbQPeLt0DxPgH63KhcM8gX3SDJ44Hpg27+n4WtGeOrwD9JSMt5lhzDV+WDTy+XMbhIuifKykvYZ007MtHlgu+bH1omPK9SyMqJWO4NHSZmrfXWpzFPdDCS/pT5rBtMBgaFlk57jsssRTvBDQmKB1YtXeJ0cCwWZJYv9AXpyk3ZKaxzSZWj/jjAKmihwh6YdXQDk+YraeH4kyAbUB9u+q79mvJzx7xNMmKlkEGR49BaOFrcIRc5vT6v37etOhgSGQExvq/Q8w643x6jGNchTrB+z4FlfiNFYkFWF6p3yaeJUcVZ1j11EcL44SpuCeoThpAQyIWdrXxBzrq4QFDTdvj7wj8gZOnilIr01+oWEgFVYHHrsjgYj1cRR8xL3oINtKagQbVBq4k7i0utQRkcmqLlSRsLy2fFBWYr7PSN+ehJjuz3YZYvImiGSl73ELFcL8Pw++0tpYWY/WmZvDsP6ZTQ3mrHQX/+tLtnzN31jQgQWD9wLaJqRUPik7MSnhdh1PV7MxV7Uqse+tVVUAuzfQEz30i9/X28/pPhCLkYRx/TjyU3cmn2PUX4Z7+LdWYT+qT2CVpLZYgtcUxkXaC2z1JP8LIPLfXEv12GgbynlcnfASONuFBsu/k6tP5ciiWJvcaVvLv6nDM3zzsfyJG1jC7osdMR7Xvytb/fvBslfloHz8k5/B5QndJKrq+FrQfy3TFJAA5EcMGrjUVzNRxDKJ5NS4u8S8hXuvby7jfmZxsDDa5KSbVvl7WS44U/9zKW/ylDTAwu/pq9CxS1fcJheOkXPpxjQHxVRoFp6yErzqPNznaZeqWQmo1FpEqyc6m+RqdODQA8CFgHkQJE+z/bGeo22C3JMnSTB74IfO8UPP50SzB8nOHWVyUH57wrh6gIBv201cNFJhAlbsOI6wpdQKpBXVLep6uxy/UdCW7e4xNSxo64MtwnbJeZQtotXlx/sb5hxTnI/hzu2i/D7sEqTAa';const _IH='c92c708bc06cf6595dad7642b9439a4e381ca3c898c0243d4972fbc5bd4b2f4f';let _src;

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
