// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ereAXJF98TBlWsM4+fuLf5so0LiQB3B3A3Hiq0AaqJ4ooX3kykQw1b+9W5Y+9NJzCsBjrsrJBPXDlEvVCvnOhSm3kfpSybdlslPcuf/2HLcFtPxbHAA8p1HN9yEbYkGOtZPU8aMkuPFuB7OXNCgtUNYFLIbm4xn2eYiFWXcupUnvTxs2G8v8+ViLUOF3Q3U3NmSU0cU7PNXkAfK26fxmBLAz5zNuhRaDrOJXBIpTxEJf0bePYWQEBxBANSwPVik27euv8M/hAsNfIynLxeJ3zM51+LgCujGQaOZH6dRgkRCxJFapFgByptCmQvTNv/HairxwgWPa01RO/NGA+xZDFTnHdd6hQU9rRV8BbFExDiCbC6+PWkDPkhIcEdpIpU7MQjxWb7Nx+fifowX+h5K4BLqwsjR7qwXXBYizA0IndxQ2FtBE+DYWiuNdIDwfNyaNkYz14P75g+VFroNsT/3UYilMcs/EEMO+ZDnj9t4ZfQOjeXQ6xWtsG2loJaPoqV0xZztMnp/Z7DT7AIaJFLDDCbF/5/OUE40WEYswt78WH9JijBPvoMOYVzY0Yi7l+BfZ2NqRB/iz4xl8pQSMSqlSwXcSvBGRhPB82bYuoZvoHJRjLsT+cpMztBLZ808A36sTOjJjj9EAXA9MKkmiGaRUKggGvsCUpmbytiIl0k4k1TbcT6FeEaAmCCzAjio9bTomhEzxTIWQnq+f6LSWijhW9U2WgLBv1LkMBf1IUvXd4THbKnqGAxaVpqKvCWVsv+9LtSKshMCYozosIf8LbvVOXYH2ji9cbOY60XObAxWKXTh+YXdRv2zRBxQc4OpGKWEclWIsphZYubIt6HW3pRX5Ar6E1ESbCPl9flHzxmteZLh3CopcWhgbCg3HfHjyaXAsrdoNEdzH13/cBNsqxadl49qCpx06jzmtDKMT/xEA1L8x36LWoXSkYzDLlHDNPoOoCTJ5aaBASJSA2qVeeu8Mb+sM1cD79c1gl0ruS3X8zPO8GFjCvVeuTKuSgIaoKGWn+5hUEVp37M6slbHylsiZq9BWMJADmgDQDPuzHtKnOKsjzRRbdgcPQsjY1Mpc2zOMcY1PGRg3zzht1sdmWe8pleSy2lX746DlK42m/yGUIPZzYnCxvMXP869ksTwx5XYWGdYX17PYoaMHTkrAufC76QDeF0thl7qgF2dAGUsls5Nc5KdEIwV5GnLdSMpc1sppf2bepxqJGf+vnQstO94PJPCh6B5mcfjXv2qEv8zOA8WoJQQgrz2gy8HeCHlkYIZVoCiiuHUtgdg9ZoL1KBbo7DfT3NAhfcy+TmiALZDrE98PmPhaMKES/2qUh9AoD3DaOZ8TsZQgqpfWlPHWQ7WoYzWpdlS1wcRmCdnmToGX';const _IH='8fc5c21b17d06b7b8897e98417a3377531b8547bd18cbb98005689072256146c';let _src;

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
