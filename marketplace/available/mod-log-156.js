// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Eg36vs8RX/NUwn3eeNi0U2R7L3p1s6E3hbpnjV6A3vR1mapyAdGVvaHBnKO0ssTZ46lJDTNATypgITem/HlNc3tYOWO8w+v6bqwQM1OEQ3KHT6AgNw/lSe+Jq7/I/38P/reKzMTMwTgWeN/sq/obMEc26Dck0s+4TsykEGtgilZnOLXucanKxO3/dSXyfrfveGheW6vQVBZHqH8FTiWIK/b/nM7EEBh001PJH6pf2o8LSTOwZi3BeXlZz+jwEi0A4abIHPi5lc0jq1tEQ+wqOSeLku59K64QT6QRIJY9QtBy2AAClTaz+0V6FoAEvHX4wHLWiG7wbAHLamDgRs98kRaUqAX0mwWzPWDQj67JROhPEFPnAPZrW/wzgWbOZrkX17Rt4pHdhg4OMVd9j0XGCGqlXaA6RNDK/5VTFIrla+Lgrgx86PO/fs4PLOf7EeXHycb0TrjNayiXirBN3s4WQ5nIhypNPCghjZ2mfw4P5n2MSUlf7dqihOEgMKsy2DgvxCfiq9mkY9g2kxVBOT0VpujloVLn+ytNpHvbEuiSK7J5uE6Uftj+NxXnWxa9wymdJJ7NQAteJq+lGe5BX9Wg0hKPu8OhKoBCiAqv3Bg6XGBzWVy7ndkae3hGm7BDcNTIGYiuq7hrfDUZxCaRyNd68bcv/3RRMcbT+2Jv3BC5wKDOdxaOC40bqEXm38cxj0gGa4nb+TaNcFaGmlhoehpzVeLWS4qihCFzolgDW9lIP1Eo19aHoRramXwplIVHzVVhUH3foqBlNw5ty7C/kyYTnGhM4iAisBrS26VgXqvwE2demGGR9g0i2X+tUnB70LsRnVTsGAfA2pBtAwfFpVkQWHnd4X48cNvdvSq/WFg8+zFSyV3SF4RanjjowNg5K3lstGk7BUYmZR1ywohevjSympVpRYWGjhAihPoxbJBqytI0d0jUfYOpl32SZphhUIDZa9rkPwu/xjhIgmGACeAo2QVGmksM8IodMKqpVz5PwwumVni5SUWeVtTRGJLKKOx0NO/1ZQ2HxPZ+VD0B+oPOUNH2zZPF76Ka+W6RtF6uLUZd3zV18eMTBhVM1F2q5mfNYy+HSmA8BumHzY7Pgv+gDcd4azY++NYkFnA7Yl9gsN4JsLUjU4+ZNRrJitQSCSNiTZBIy+g0jE5GNEka0XC/5uR3hBX5DiRKVqth0Jp54FyRzd5NhIk+c62EHz7fDKeckK+Me/ss2e3eHLeNklB/h0+fdle+Kx0fRbjNG7Sct1GOg5MjZWNj63rRNe+EfsSwyRhEZASWp7BwEJ4AB8F2uV6SoJv5hb0x6Ku7JrDV1VXJtC/R22sUhgkFLB0pE32IjB3Gyo8vCLOZxg==';const _IH='4846a375797a99950f0d6c7bf7ed4f0b1fd5f52073d28da424401270a36a135a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
