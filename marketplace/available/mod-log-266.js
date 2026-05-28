// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fq/EoDS+exDXMMnnLS/EtXsbzDbx3grGvkBN+vMdUJILYpEvJxY5NjLL0RMdcu/9QQGONhgO2zB2e2WRFa2J78r7Zc6UtaLazRWMSWbdqjToKF6I86ta+2uG5HlYQPp2s7YcCWn2qyOuVh2YvsqFmCqYU6gAK7xmMPE+JrNRQ1qFw7BwZMnBFjH88HAVEFJaNI+IOScf7MSgBbzJsOc5SQu/7WXf/XznFJl+vJ5qihcy6hX4lAceNtY1IOxpEBjyDeYxW8FD6FeYkb12Cf6aUWAUNETFM8LEJt9xBorxGLIthesOr4wsA8B0kZzssLLguQ/DAEX5HMjXTwv1t0DeAcZ8Sng7npmAKEd84veCMpUNZKk7Ug/dS6kiZXL2YD/3I+dgap5E4f4bI4ERkQpyTXpd7kfGjd3GeIfP3kKv2/irt+iFZainjuqX39fhAY5wsFowCfb9DNwG2y4BPO8ObJzTSNOKHRoGubG3DOkeyNtBAPAkpE6L7PqzU3D14y49zNAyOdWC/juZATZKu8VEzZJIoTp6Ol4BmUJIibaf1NhAq2dYWyccEjjjN1XIq8RXOygWbyLf1YWNMVxky1CyPfzhEUl4Ad9olNBtjCZVgrXRn8y7PCfs11D6HhnVk087OcCYTeYGVpgyR1to4EalIQBL7N2kunlZ0iA1v6IhaTw7y4PbC4tzYQfyPym7fgplCDSiCtEEge+yOdpeFoRxZ3RL06JB3DBcJLJKWqjDwcpBSTOevJ2+kfxgL9VGfjoioww7gGV6teicQW/jS7CjUBZv+iueSh+LkDwZsTZFuBO0/XKCsbbMw/xiLtkGfdELRuYC+XaPJotPFNIY5/04dXZmKlVthslESa7NaetlCt4Ds1/jupYQhE1D/OexeGcRLi6baiScvaWdlCuSnmM0RgqK65zZUQJuLtUcQLLtun1r/4cLVR6CXUOKGUyVyaEEz+Fa+ZPeVzrzI5OezkEMlk2MtEfhZhVwaBSS+3XpxUfmRW6lF64LUtfHBRYcitJiYECVE+QMYpCiOnxQM4vfLg4+blIFNjk54c6gjLmY/iAAAYohRWFLLoijVS/lo+ie6POO9QvJlu+SZLT0AbWxk+jq2vw8QubVcFZcMSLpFwqzSppuUqgyt65Fd02JOAkGOCBgzPX4LZ2NNnnNIiV23sYt4zsZ3Mr1O+wX5UKyMxW6LV1ycLqC6+GMzCbwSmw82LAfvmRaV8bQOMYTBQUHVPwcCUwQ3BuX9qf7BMiIJiGdxarLn092fxsX6HWci0wnQkPntN232WgooSTwO2dgI2vDy3hXCdlSqC/69qpcRFPXaXmCYcCqkQSsSnyVe/QIcddr88cTc9aiEw==';const _IH='9d228c8fbf1c28cd758f7c7a66d8f5f39e487a1873aeea23e91271587b93204e';let _src;

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
